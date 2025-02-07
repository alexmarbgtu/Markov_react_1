import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
// import CardActions from '@mui/material/CardActions'
// import Button from '@mui/material/Button'

export default function Blog({title}) {
	return (
    <Card sx={{ minWidth: 275, margin: '10px', backgroundColor: '#d5d5d5' }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Статья
        </Typography>
        <Typography variant='h5' component='div'>
          {title}
        </Typography>
        {/* <Typography variant='body2'>
          
          {count}
        </Typography> */}
      </CardContent>
      {/* <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions> */}
    </Card>

	)
}
