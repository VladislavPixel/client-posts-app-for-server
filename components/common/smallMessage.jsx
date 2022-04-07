import PropTypes from "prop-types"

const SmallMessage = ({ classesParent, iconPath, title, offer, altIcon }) => {
	return (
		<div className={`${classesParent}__message-small small-message`}>
			<div className="small-message__block">
				<img className="small-message__icon" src={iconPath} alt={altIcon} />
				<h2 className="small-message__title title">{title}</h2>
				<p className="small-message__sub-title">{offer}</p>
			</div>
		</div>
	)
}

SmallMessage.propTypes = {
	classesParent: PropTypes.string.isRequired,
	iconPath: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	offer: PropTypes.string.isRequired,
	altIcon: PropTypes.string.isRequired
}

export default SmallMessage
