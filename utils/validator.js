function validator(configError, state) {
	const errorObject = {}
	function switcher (data, config, objectSettings) {
		let isError
		switch (config) {
			case "isRequired":
				isError = data.length > 0
			break
			default:
				isError = true
		}
		return !isError ? objectSettings.message : null
	}
	for (const key in state) {
		for (const config in configError[key]) {
			const message = switcher(state[key], config, configError[key][config])
			if (message && !errorObject[key]) {
				errorObject[key] = message
			}
		}
	}
	return errorObject
}

export default validator
