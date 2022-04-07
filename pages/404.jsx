import Router from "next/router"

// Components
import Button from "../components/common/button"

const NotFoundPage = () => {
	const handlerBackBtn = () => Router.push("/")
	return (
		<div className="not-found-block">
			<div className="not-found-block__container">
				<img className="not-found-block__icon" src="/icons/notFound.svg" alt="Icon not found - 404" />
				<h1 className="not-found-block__title">Страница не была найдена: <span>Ошибка 404</span></h1>
				<p className="not-found-block__sub-title">Попробуйте вбить другой адрес в адресной строке или нажмите кнопку, чтобы вернуться на главную сайта.</p>
				<Button onCallFun={handlerBackBtn} type="button" text="На главную" classesParent="not-found-block" />
			</div>
		</div>
	)
}

export default NotFoundPage
