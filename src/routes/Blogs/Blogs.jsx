import { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import Layout from '../../components/Layout/Layout'
import Blog from '../../components/Blog/Blog'
import './Blogs.css'




export default function Blogs() {

	let url = ''
	const { postId } = useParams()
	const [blogs, setBlogs] = useState([])

	console.log(postId)

	postId
		? (url = `https://jsonplaceholder.typicode.com/posts/${postId}`)
		: (url = 'https://jsonplaceholder.typicode.com/posts')


	// console.log(url)
	useEffect(() => {
		console.log(url)
		fetch(url)
			.then(response => response.json())
			.then(res => {
				setBlogs(res)
			})
	}, [url])

	return (
		<Fragment>
			<Layout className='main-blog'>
				{postId ? (
					<Blog
						key={uuid()}
						title={blogs.title}
						id={blogs.id}
						body={blogs.body}
					/>
				) : (
					blogs.map(itm => {
						return <Blog key={uuid()} title={itm.title} id={itm.id} />
					})
				)}
			</Layout>
		</Fragment>
	)
}

// export default function Blogs() {
	


// 	const [blogs, setBlogs] = useState([])
// 	useEffect(() => {
// 		fetch('https://jsonplaceholder.typicode.com/posts')
// 		.then((response) => response.json())
// 		.then((res) => {
// 			setBlogs(res)
// 		})
// 	}, [])

// 	return (
// 		<Fragment>
// 			<Layout className='main-blog'>
// 				{blogs.map((itm) => {
// 					// console.log(itm);
// 					return <Blog key={uuid()} title={itm.title}/>
// 				})}
// 			</Layout>
// 		</Fragment>
// 	)
// }
