import { useRef, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import PropTypes from "prop-types"
import Link from "next/link"

// Components
import Search from "./search"
import Button from "./button"
import Router from "next/router"
// Auxiliary
import localStorageService from "../../services/localStorage.service"
import { setAuthUser, removeAuthCurrentUser } from "../../store/userAuth"

const Header = ({ isSearch, isAuthBtn, isPostLayot, valueSearch, onChangeSearch, onResetSearch }) => {
	const dispatch = useDispatch()
	const refHeader = useRef(null)
	// STATES
	const [isShow, setShow] = useState(true)
	const [widthHeader, setWidthHeader] = useState(null)
	const [isAuth, setAuth] = useState(false)

	// Handlers
	const handlerAuthBtn = () => Router.push("/authorization")
	const handlerRemoveAuthUser = () => {
		dispatch(removeAuthCurrentUser())
		setAuth(false)
		Router.push("/")
	}
	useEffect(() => {
		if (localStorageService.getToken() !== null) {
			setAuth(true)
			dispatch(setAuthUser())
		}
		setWidthHeader(refHeader.current?.offsetWidth)
	}, [])
	useEffect(() => {
		if (widthHeader <= 400 && isPostLayot) setShow(false)
		if (widthHeader > 400 && isPostLayot) setShow(true)
	}, [widthHeader, isPostLayot])
	return (
		isShow ?
			<header ref={refHeader} className="header">
				<div className="header__container _container">
					<div className="header__row header__row_first">
						<div className="header__column">
							<Link href="/"><a className="header__logo">Logo</a></Link>
						</div>
						<div className="header__column header__column_second">
							{isSearch && <Search onReset={onResetSearch} onChange={onChangeSearch} value={valueSearch} classesParent="header" placeholder="Поиск по тексту" />}
							<div className="header__posts-link link-posts">
								<img className="link-posts__icon" src="/icons/postsIcon.svg" alt="Posts icon" />
								<Link href="/posts"><a className="link-posts__ref">Посты</a></Link>
							</div>
						</div>
					</div>
					{isAuthBtn &&
						<div className="header__row header__row_second">
							{!isAuth ?
								<Button onCallFun={handlerAuthBtn} type="button" text="Авторизация" classesParent="header" /> :
								<div className="header__profile-block block-profile">
									<div className="block-profile__row">
										<img className="block-profile__icon" src="/icons/profile.svg" alt="icon image profile" />
										<p className="block-profile__message">{localStorageService.getName()} - вы авторизованы!</p>
									</div>
									<Button onCallFun={handlerRemoveAuthUser} type="button" text="Выход" classesParent="block-profile" />
								</div>
							}
						</div>
					}
				</div>
			</header> : null
	)
}

Header.defaultProps = {
	isSearch: true,
	isAuthBtn: true,
	isPostLayot: false
}

Header.propTypes = {
	isSearch: PropTypes.bool.isRequired,
	isAuthBtn: PropTypes.bool.isRequired,
	isPostLayot: PropTypes.bool.isRequired,
	valueSearch: PropTypes.string,
	onChangeSearch: PropTypes.func,
	onResetSearch: PropTypes.func
}

export default Header