import PropTypes from "prop-types"

const PostTextAreaBlock = ({ value, onUpdateValue }) => {
	return(
		<div className="post-content__area-wrap">
			<textarea onChange={onUpdateValue} className="post-content__area" value={value} name="newDescription">{value}</textarea>
		</div>
	)
}

PostTextAreaBlock.propTypes = {
	value: PropTypes.string,
	onUpdateValue: PropTypes.func.isRequired
}

export default PostTextAreaBlock
