import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import PropTypes from "prop-types"
import Router from "next/router"

// Components
import PostsLayot from "../../layots/postsLayot"
import Search from "../../components/common/search"
import PostsList from "../../components/ui/postsList"
import Button from "../../components/common/button"
import Spinner from "../../components/common/spinner"
// Auxiliary
import postsService from "../../services/posts.service"
import { setPostsData, getKeysArrayData, getAllData, getLengthAll } from "../../store/posts"

const PostsPage = ({ posts: serverPosts, postsLengthAll: serverLengthPosts }) => {
	const dispatch = useDispatch()
	if (serverPosts) dispatch(setPostsData(serverPosts, 1))
	// REDUX
	const keys = useSelector(getKeysArrayData())
	const dataAll = useSelector(getAllData())
	const lengthValue = useSelector(getLengthAll())
	// STATE
	const [loadingDataForTitle, setLoadingDataForTitle] = useState(false)
	const [dataPostsSearch, setDataPostsSearch] = useState(null)
	const [length, setLength] = useState(serverLengthPosts || lengthValue)
	const [currentValue, setCurrentValue] = useState((keys.length ? keys.length : 1))
	const [loading, setLoading] = useState(true)
	const [valueSearch, setValueSearch] = useState("")
	function givePostsFromRedaxKeys() {
		let arr = []
		keys.forEach(key => arr.push(...dataAll[key]))
		return arr
	}
	const [dataPosts, setDataPosts] = useState(serverPosts || givePostsFromRedaxKeys())

	// handlers function
	const handlerChangeSearch = ({ target }) => setValueSearch(prevState => target.value)
	const handlerResetSearch = () => {
		setValueSearch("")
		setDataPostsSearch(null)
	}
	const handlerMoreBtn = async () => {
		handlerResetSearch()
		const posts = await postsService.getPostsByPage(currentValue + 1)
		dispatch(setPostsData(posts, currentValue + 1))
		setCurrentValue(prevState => prevState + 1)
		setDataPosts([...dataPosts, ...posts])
	}
	const handlerBackBtn = () => Router.push("/")

	// Если сервер не запустит рендер, данные будут получены на клиенте
	useEffect(() => {
		const loadDataPosts = async () => {
			const posts = await postsService.getPostsByPage(1)
			dispatch(setPostsData(posts, 1))
			setDataPosts(posts)
		}
		const loadLengthValue = async () => {
			const postsLengthAll = await postsService.getAllLength()
			setLength(postsLengthAll)
		}
		if (!serverPosts && !dataAll[currentValue]) loadDataPosts()
		if (!serverLengthPosts && !lengthValue) loadLengthValue()
	}, [])

	// Если данные еще не получены
	useEffect(() => {
		if (dataPosts && (length !== null)) setLoading(false)
	}, [dataPosts, length])
	if (loading) return <Spinner />

	// ОБРАБОТКА ПОИСКА
	const handlerSubmitSearch = async () => {
		setLoadingDataForTitle(true)
		const newArrayDataPosts = await postsService.getDataForSearch({ title: valueSearch, description: "" })
		setDataPostsSearch(newArrayDataPosts)
		setLoadingDataForTitle(false)
	}

	// ВЫБОРКА ПОКАЗЫВАЕМЫХ ДАННЫХ, если есть есть данные поиска, то их иначе общие
	const correctData = (dataPostsSearch !== null ? dataPostsSearch : dataPosts)
	return (
		<PostsLayot>
			<div className="content-container__posts posts">
				<div className="posts__container _container">
					{loadingDataForTitle ? <Spinner /> :
						<React.Fragment>
							<h1 className="posts__title title">Посты нашей платформы</h1>
							<Button onCallFun={handlerBackBtn} type="button" text="На главную" classesParent="posts__btn_back posts" />
							{dataPosts.length !== 0 &&
								<div className="posts__search-container">
									<Search onReset={handlerResetSearch} onChange={handlerChangeSearch} value={valueSearch} classesParent="posts" placeholder="Поиск по заголовку" />
									<Button classesParent="posts__btn_blue posts" text="Отправить" onCallFun={handlerSubmitSearch} type="button" />
								</div>
							}
							<PostsList data={correctData} />
							{dataPosts.length !== 0 && dataPosts.length !== length &&
								<div className="posts__wrap-btn">
									<Button type="button" text="Больше постов" classesParent="posts" onCallFun={handlerMoreBtn} />
								</div>
							}
						</React.Fragment>
					}
				</div>
			</div>
		</PostsLayot>
	)
}

PostsPage.getInitialProps = async ({ req }) => {
	if (!req) return { posts: null, postsLengthAll: null }
	const posts = await postsService.getPostsByPage(1)
	const postsLengthAll = await postsService.getAllLength()
	return { posts, postsLengthAll }
}

PostsPage.propTypes = {
	posts: PropTypes.array,
	postsLengthAll: PropTypes.number
}

export default PostsPage
