import React from "react"
import PropTypes from "prop-types"

// Components
import WrapperContent from "../components/HOC/wrapperContent"
import Footer from "../components/common/footer"

const PostsLayot = ({ children }) => {
	return (
		<React.Fragment>
			<WrapperContent>
				{children}
			</WrapperContent>
			<Footer />
		</React.Fragment>
	)
}

PostsLayot.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
}

export default PostsLayot