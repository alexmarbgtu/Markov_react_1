import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import { string } from 'prop-types'
import { useEffect, useState } from 'react'
import Skeleton from '@mui/material/Skeleton';

import './Blog.css'

export default function Blog({ title, id, userId }) {
	const navigate = useNavigate()

	const [author, setAuthor] = useState('')

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
			.then(response => response.json())
			.then(res => {
				setAuthor(res.name)
			})
	}, [userId])

	return (
		<Card
			sx={{
				width: '350px',
				margin: '10px',
				backgroundColor: '#333333',
				marginBottom: '35px',
				position: 'relative',
				height: '150px',
			}}
		>
			<CardContent>
				{author ? (
					<Typography gutterBottom sx={{ color: '#9f9ba1', fontSize: 14 }}>
						{author}
					</Typography>
				) : (
					<Skeleton variant='text' sx={{ fontSize: '1.65rem', width: '100px' }} />
				)}

				<Typography
					variant='h5'
					component='div'
					sx={{ color: '#fff', fontSize: 17 }}
				>
					{title}
				</Typography>
			</CardContent>
			<CardActions
				sx={{
					position: 'absolute',
					left: '5px',
					bottom: '5px',
				}}
			>
				<Button
					className='button-blockinfo'
					size='small'
					onClick={() => navigate(`/blog/${id}`)}
				>
					Подробнее
				</Button>
			</CardActions>
		</Card>
	)
}

Blog.propTypes = {
  title: string,
  id: string,
  userId: string
}
