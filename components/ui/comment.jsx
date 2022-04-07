import PropTypes from "prop-types"

const Comment = ({ username, content }) => {
	return (
		<div className="block-comments__element comment-block">
			<div className="comment-block__column">
				<img className="comment-block__icon-profile" src="/icons/profileComment.svg" alt="Icon of the user who left the comment" />
			</div>
			<div className="comment-block__column">
				<h5 className="comment-block__name">{username}</h5>
				<p className="comment-block__text">{content}</p>
			</div>
		</div>
	)
}

Comment.propTypes = {
	username: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired
}

export default Comment