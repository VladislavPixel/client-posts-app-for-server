import PropTypes from "prop-types"

// Components
import SmallMessage from "../common/smallMessage"
import PostCard from "./postCard"

const PostsList = ({ data }) => {
	return (
		data.length === 0 ?
			<SmallMessage classesParent="posts-block" iconPath="/icons/sadSmile.svg" title="В текущий момент на сайте нет постов" offer="Попробуйте зайти позже" altIcon="Иконка грустного смайлика" /> :
			<div className="posts-block__list">
				{data.map((post, index) => <PostCard key={post.id + index} {...post} />)}
			</div>
	)
}

PostsList.propTypes = {
	data: PropTypes.array.isRequired
}

export default PostsList
