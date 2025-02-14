import { Fragment, useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import Blog from '../../components/Blog/Blog'
import Pagination from '@mui/material/Pagination'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import './Blogs.css'




export default function Blogs() {

	// const { postId } = useParams()
	const [blogs, setBlogs] = useState([])
	const [page, setPage] = useState(1)

	
 	useEffect(() => {
		if (blogs.length == 0)
			fetch('https://jsonplaceholder.typicode.com/posts')
				.then(response => response.json())
				.then(res => {
					// console.log('Hello')
					setBlogs(res)
				})
	}, [page, blogs])

	const theme = createTheme({
		components: {
			MuiPaginationItem: {
				styleOverrides: {
					root: {
						variants: [
							{
								style: {
									color: '#9f9ba1',
								},
							},
						],
					},
				},
			},
		},
	})

	const handleChange = (event, value) => {
		setPage(value)
	}

	return (
		<Fragment>
			<Layout className='main-blog'>
				<div className='blogs'>
					{blogs.slice((page - 1) * 10, page * 10).map(itm => {
						return (
							<Blog
								key={itm.id}
								title={itm.title}
								id={itm.id}
								userId={itm.userId}
							/>
						)
					})}
				</div>
				<div className='pagin'>
					<ThemeProvider theme={theme}>
						<Pagination
							count={10}
							color='primary'
							shape='rounded'
							page={page}
							onChange={handleChange}
						/>
					</ThemeProvider>
				</div>
			</Layout>
		</Fragment>
	)
}