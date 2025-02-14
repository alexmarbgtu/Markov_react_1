import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'

export default function CardBlog({ title, body, userId }) {

	const [author, setAuthor] = useState('')

	useEffect(() => {
    // console.log(userId)
		if (userId) fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
			.then(response => response.json())
			.then(res => {
				setAuthor(res.name)
			})
	}, [userId])
	return (
		<Card
			sx={{
				width: '550px',
				backgroundColor: '#333333',
        padding: '15px',
				height: '350px',
			}}
		>
			<CardContent>
				<Typography
					variant='h5'
					component='div'
					sx={{ color: '#fff', marginBottom: '20px' }}
				>
					{title}
				</Typography>
				<Typography sx={{ color: '#9f9ba1', fontSize: 14 }}>
					{author}
				</Typography>
				<Typography
					variant='body2'
					sx={{ color: '#fff', marginTop: '20px' }}
				>
					{body}
				</Typography>
			</CardContent>
		</Card>
	)
}
