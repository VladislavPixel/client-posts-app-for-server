export default function getNewArray(maxElement, current, arr) {
	const maxBorder = current * maxElement
	const minBorder = maxBorder - maxElement

	return arr.slice(minBorder, maxBorder)
}