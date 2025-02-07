import { Fragment, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import Layout from '../../components/Layout/Layout'
import Blog from '../../components/Blog/Blog'
import './Blogs.css'

export default function Blogs() {
	const [blogs, setBlogs] = useState([])
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
		.then((response) => response.json())
		.then((res) => {
			setBlogs(res)
		})
	}, [])

	return (
		<Fragment>
			<Layout className='main-blog'>
				{blogs.map((itm) => {
					// console.log(itm);
					return <Blog key={uuid()} title={itm.title}/>
				})}
			</Layout>
		</Fragment>
	)
}
