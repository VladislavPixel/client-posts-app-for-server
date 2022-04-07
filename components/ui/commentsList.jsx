import PropTypes from "prop-types"

// Components
import SmallMessage from "../common/smallMessage"
import Comment from "./comment"

const CommentsList = ({ dataComments }) => {
	return (
		(!dataComments.length &&
			<SmallMessage classesParent="block-comments" iconPath="/icons/comments.svg" title="Комментарии отсутствуют" offer="Оставьте комментарий, будьте первым" altIcon="Иконка комментариев" />) ||
			<div className="block-comments__list">
				{dataComments.map((comment, index) => <Comment key={comment.id + index} {...comment} />)}
			</div>
	)
}

CommentsList.propTypes = {
	dataComments: PropTypes.array.isRequired
}

export default CommentsList