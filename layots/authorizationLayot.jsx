import React from "react"
import PropTypes from "prop-types"

// Components
import Header from "../components/common/header"
import WrapperContent from "../components/HOC/wrapperContent"
import Footer from "../components/common/footer"

const AuthorizationLayot = ({ children }) => {
	return (
		<React.Fragment>
			<Header isSearch={false} isAuthBtn={false} />
			<WrapperContent>
				{children}
			</WrapperContent>
			<Footer />
		</React.Fragment>
	)
}

AuthorizationLayot.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
}

export default AuthorizationLayot