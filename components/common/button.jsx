import PropTypes from "prop-types"

const Button = ({ type, text, classesParent, onCallFun, icon, isIcon }) => {
	return (
		<button onClick={onCallFun} className={`${classesParent}__btn universal-btn${isIcon ? " icon-btn" : ""}`} type={type}>
			{icon && icon}
			{text}
		</button>
	)
}

Button.defaultProps = {
	icon: false,
	isIcon: false
}

Button.propTypes = {
	type: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	classesParent: PropTypes.string.isRequired,
	onCallFun: PropTypes.func,
	icon: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.bool
	]).isRequired,
	isIcon: PropTypes.bool.isRequired
}

export default Button