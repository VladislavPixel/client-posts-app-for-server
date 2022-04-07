import PropTypes from "prop-types"
import { useEffect } from "react"
import usePagination from "../hooks/usePagination"

const Pagination = ({ onArrow, onUpdatePagin, current, maxPosts, length, classesParent }) => {
	const scorePagins = Math.ceil(length / maxPosts)
	const { isPrev, isNext, stateArrayPagins } = usePagination(scorePagins, current)
	useEffect(() => {
		if (scorePagins < 2) onUpdatePagin(1)
		if (scorePagins < current) onUpdatePagin(1)
	})
	return (
		scorePagins > 1 && (
			<nav className={`${classesParent}__pagination pagination-body`}>
				<div onClick={() => onArrow("decrement")} className={"pagination-body__arrow-wrap pagination-body__arrow-wrap_prev" + (isPrev ? " active" : "")}>
					<span className="pagination-body__flag-left"></span>
				</div>
				<ul className="pagination-body__list">
					{stateArrayPagins.map(item => {
						return item._id !== "delimiter" ? (
							<li onClick={() => onUpdatePagin(item._id)} key={item._id} className={current === item._id ? "active" : ""}>
								<span className="pagination-body__pagin">
									{item.value}
								</span>
							</li>
						) : (
							<li key={item._id} className="pagination-body__delimiter">
								<span>{item.value}</span>
							</li>
						)
					})}
				</ul>
				<div onClick={() => onArrow("increment")} className={"pagination-body__arrow-wrap pagination-body__arrow-wrap_next" + (isNext ? " active" : "")}>
					<span className="pagination-body__flag-right"></span>
				</div>
			</nav>
		)
	)
}

Pagination.propTypes = {
	onArrow: PropTypes.func.isRequired,
	onUpdatePagin: PropTypes.func.isRequired,
	current: PropTypes.number.isRequired,
	maxPosts: PropTypes.number.isRequired,
	length: PropTypes.number.isRequired,
	classesParent: PropTypes.string.isRequired
}

export default Pagination
