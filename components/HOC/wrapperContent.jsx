import PropTypes from "prop-types"

const WrapperContent = ({ children }) => {
	return (
		<main className="content-container">
			{children}
		</main>
	)
}

WrapperContent.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	])
}

export default WrapperContent