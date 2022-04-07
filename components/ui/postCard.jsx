import PropTypes from "prop-types"
import Link from "next/link"

const PostCard = ({ id, title, description, count }) => {
	return (
		<div className="posts-block__column">
			<div className="posts-block__card card-post">
				<div className="card-post__wrap-img">
					<Link href={`/post/[postId]`} as={`/post/${id}`}>
						<a><img className="card-post__image" src="/imagesPosts/postImage.png" alt="Post picture" /></a>
					</Link>
				</div>
				<div className="card-post__content">
					<div className="card-post__card-content post-content-card">
						<Link href={`/post/[postId]`} as={`/post/${id}`}>
							<a><h3 className="post-content-card__title">{title}</h3></a>
						</Link>
						<p className="post-content-card__text">{description}</p>
					</div>
					<div className="card-post__footer card-actions">
						<Link href={`/post/[postId]`} as={`/post/${id}`}>
							<a className="card-actions__link"><img className="card-actions__comment-icon" src="/icons/comment.svg" /></a>
						</Link>
						<span className="card-actions__number-comments">{count}</span>
						<Link href={`/post/[postId]`} as={`/post/${id}`}>
							<a className="card-actions__link"><img className="card-actions__pencil-icon" src="/icons/pencil.svg" /></a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

PostCard.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	count: PropTypes.number.isRequired
}

export default PostCard
