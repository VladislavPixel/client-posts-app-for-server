import React from "react"
import PropTypes from "prop-types"

// Components
import WrapperContent from "../components/HOC/wrapperContent"
import Footer from "../components/common/footer"
import Header from "../components/common/header"

const PostLayot = ({ children }) => {
	return (
		<React.Fragment>
			<Header isPostLayot={true} isSearch={false} />
			<WrapperContent>
				{children}
			</WrapperContent>
			<Footer />
		</React.Fragment>
	)
}

PostLayot.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
}

export default PostLayot