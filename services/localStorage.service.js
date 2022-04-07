const TOKEN_KEY = "tokenForUser"
const ID_KEY = "id"
const USER_NAME = "name"

export function setUserAuth({ ID, Token, Username }) {
	localStorage.setItem(TOKEN_KEY, Token)
	localStorage.setItem(ID_KEY, ID)
	localStorage.setItem(USER_NAME, Username)
}
export function removeUserAuth() {
	localStorage.removeItem(TOKEN_KEY)
	localStorage.removeItem(ID_KEY)
	localStorage.removeItem(USER_NAME)
}

export const getCurrentToken = () => localStorage.getItem(TOKEN_KEY)
export const getIdUser = () => localStorage.getItem(ID_KEY)
export const getNameCurrentAuthUser = () => localStorage.getItem(USER_NAME)

const localStorageService = {
	setAuth: setUserAuth,
	getToken: getCurrentToken,
	getId: getIdUser,
	getName: getNameCurrentAuthUser,
	removeAuth: removeUserAuth
}

export default localStorageService
