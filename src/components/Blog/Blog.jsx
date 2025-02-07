import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

export default function Blog({ title, id, body }) {
	const navigate = useNavigate()

	return (
		<Card sx={{ minWidth: 275, margin: '10px', backgroundColor: '#d5d5d5' }}>
			<CardContent>
				<Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
					Статья
				</Typography>
				<Typography variant='h5' component='div'>
					{title}
				</Typography>
				<Typography variant='body2'>{body}</Typography>
			</CardContent>
			{body ? (
				<></>
			) : (
				<CardActions>
					<Button size='small' onClick={() => navigate(`/blog/${id}`)}>
						Подробнее
					</Button>
				</CardActions>
			)}
		</Card>
	)
}
