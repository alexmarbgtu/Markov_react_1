import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import CardBlog from '../../components/CardBlog/CardBlog'

import './BlogPost.css'

export default function Blogs() {
	const { postId } = useParams()
  const [blog, setBlog] = useState({})

  useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
			.then(response => response.json())
			.then(res => {
				setBlog(res)
			})
	}, [postId])
  return (
		<>
			<Layout className='main-blog'>
				<div className='blog'>
					<CardBlog title={blog.title} body={blog.body} userId={blog.userId}/>
				</div>
			</Layout>
		</>
	)

}
