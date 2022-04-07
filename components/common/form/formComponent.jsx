import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import validator from "../../../utils/validator"

const FormComponent = ({ children, classesParent, onSubmit, dataDefault, config }) => {
	const [state, setState] = useState(dataDefault || {})
	const [error, setError] = useState({})
	const validation = () => {
		const data = validator(config, state)
		setError(data)
		return (Object.keys(data).length > 0)
	}
	const handlerChange = (dataField) => {
		setState(prevState => {
			return { ...prevState, [dataField.name]: dataField.value }
		})
	}
	const handlerSubmit = (event) => {
		event.preventDefault()
		const isValid = validation()
		if (!isValid) {
			onSubmit(state)
		}
	}
	const isNoActivBtn = Object.keys(error).length > 0
	const newChildren = React.Children.map(children, (child) => {
		let configChildren
		if (typeof child.type === "function") {
			configChildren = {
				...child.props,
				value: state[child.props.name],
				error: error[child.props.name],
				onChange: handlerChange
			}
		}
		if (child.type === "button") {
			if (child.props.type === "submit" || child.props.type === undefined) {
				const newChildProps = { ...child.props, className: child.props.className + (isNoActivBtn ? " active" : "") }
				configChildren = {
					...newChildProps,
					disabled: isNoActivBtn,
				}
			}
		}
		return React.cloneElement(child, configChildren)
	})
	useEffect(() => {
		validation()
	}, [state])
	return (
		<form onSubmit={handlerSubmit} className={`${classesParent}__form form`}>{newChildren}</form>
	)
}

FormComponent.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	classesParent: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
	dataDefault: PropTypes.object.isRequired,
	config: PropTypes.object.isRequired
}

export default FormComponent