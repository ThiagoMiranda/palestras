export default sum = () => {
	return arguments.reduce((acc, item) => {
		acc += item
		return acc
	}, 0)
}