export default sum = (...values) => {
	return values.reduce((acc, item) => {
		acc += item
		return acc
	}, 0)
}