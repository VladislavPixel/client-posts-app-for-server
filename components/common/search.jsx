import PropTypes from "prop-types"

const Search = ({ classesParent, placeholder, value, onChange, onReset }) => {
	return (
		<div className={`${classesParent}__search search-block`}>
			<div className="search-block__wrap">
				<label htmlFor="search"><img className="search-block__icon" src="/icons/search.svg" alt="search icon" /></label>
				<div className="search-block__input-wrap">
					<input onChange={onChange} value={value} className="search-block__input" name="search" id="search" placeholder={placeholder} />
				</div>
				<img className="search-block__flag" onClick={onReset} src="/icons/cross.svg" alt="icon cross" />
			</div>
		</div>
	)
}

Search.propTypes = {
	classesParent: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	onReset: PropTypes.func.isRequired
}

export default Search
