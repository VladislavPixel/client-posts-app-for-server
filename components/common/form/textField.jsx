import { useState } from "react"
import PropTypes from "prop-types"

const TextField = ({ name, label, placeholder, classesParent, type, value, error, onChange, isPassword }) => {
	const [stateIconPass, setStateIconPass] = useState("show")
	const handlerChange = ({ target }) => {
		onChange({ name: name, value: target.value })
	}
	const handlerIcon = () => {
		if (stateIconPass === "show") {
			setStateIconPass("noShow")
		} else {
			setStateIconPass("show")
		}
	}
	const getIcon = () => {
		if (stateIconPass === "show") return <img onClick={handlerIcon} src="/icons/icon-eye.svg" alt="Human eye icon." />
		if (stateIconPass === "noShow") return <img onClick={handlerIcon} src="/icons/icon-eye-slash.svg" alt="Crossed out human eye icon." />
	}
	const typeCorrect = (type === "password" && stateIconPass === "noShow") ? "text" : (type === "password" && stateIconPass === "show") ? "password" : "text"
	return (
		<div className={`${classesParent}__field text-field`}>
			<label htmlFor={name} className="text-field__label">{label}</label>
			<div className={`text-field__wrap-input${(isPassword ? " text-field__wrap-input_password" : "")}`}>
				<input onChange={handlerChange} value={value} type={typeCorrect} className="text-field__input" name={name} id={name} placeholder={placeholder} />
				{type === "password" && getIcon()}
			</div>
			{error && <div className="text-field__error">{error}</div>}
		</div>
	)
}

TextField.defaultProps = {
	type: "text"
}

TextField.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	classesParent: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	value: PropTypes.string,
	isPassword: PropTypes.bool,
	onChange: PropTypes.func,
	error: PropTypes.string
}

export default TextField
