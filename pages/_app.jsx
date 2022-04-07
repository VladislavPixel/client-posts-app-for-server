import "../styles/style.scss"
import Head from "next/head"
import React from "react"
import { Provider } from "react-redux"
import createStore from "../store/createStore"

const store = createStore()

const MyApp = ({ Component, pageProps }) => {
	return (
		<React.Fragment>
			<Head>
				<meta charset="utf-8" />
				<meta name="keywords" content="посты, posts, комментарии, comments" />
				<meta name="description" content="Приложение FastPost позволяет быстро оставить свой пост и написать комментарии под постами других пользователей." />
				<title>FastPost</title>
			</Head>
			<div className="wrapper">
				<Provider store={store}>
					<Component {...pageProps} />
				</Provider>
			</div>
		</React.Fragment>
	)
}

export default MyApp
