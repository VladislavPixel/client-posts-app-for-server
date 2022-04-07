const usePagination = (lengthPages, currentPage) => {
	const trigger1 = (lengthPages > 1) && (currentPage === 1) && true
	const isPrevArrow = !trigger1 || false
	const trigger2 = (lengthPages > 1) && (lengthPages === currentPage) && true
	const isNextArrow = !trigger2 || false
	const arrayPagins = []
	for (let i = 0; i < lengthPages; i++) {
		const z = i + 1
		arrayPagins.push({ _id: z, value: z })
	}
	function getPagins(allPage, array, current) {
		const MAX_COUNT_PAGE = 4
		if (allPage > MAX_COUNT_PAGE) {
			const delimiter = { _id: "delimiter", value: "..." }
			if (current < 2) {
				return [
					...array.slice(0, 2),
					delimiter,
					array[array.length - 2],
					array[array.length - 1]
				]
			}
			const filteredArray = array.filter(
				(item, index) => index >= current - 1 && index < array.length - 1
			)
			function getArray(mode) {
				if (mode === "more") {
					const intermediateArray = array.slice(current - 1, array.length - 1)
					return (
						(intermediateArray.length > 2 && intermediateArray.slice(0, 2)) ||
						intermediateArray
					)
				}
				if (mode === "less") {
					return array.filter(
						(el, index) => index >= current - 2 && index < array.length - 1)
				}
			}
			const newArray =
				filteredArray.length >= 2 ? getArray("more") : getArray("less")
			return [
				array[0],
				delimiter,
				...newArray,
				array[array.length - 1]
			]
		}
		return array
	}
	const config = {
		isPrev: isPrevArrow,
		isNext: isNextArrow,
		stateArrayPagins: getPagins(lengthPages, arrayPagins, currentPage)
	}
	return config
}

export default usePagination