import Box from '@mui/material/Box'
// import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import './ContactForm2.css'
import propTypes from 'prop-types'

export default function ContactForm2({ onClick }) {

	return (
		<div>
			<Modal
				open={open}
				onClose={onClick}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box className='modal-form'>
					<Typography id='modal-modal-title' variant='h6' component='h2'>
						Text in a modal
					</Typography>
					<Typography id='modal-modal-description' sx={{ mt: 2 }}>
						Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
					</Typography>
				</Box>
			</Modal>
		</div>
	)
}


ContactForm2.propTypes = {
  onClick: propTypes.func
}