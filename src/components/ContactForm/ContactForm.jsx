// import { useForm } from 'react-hook-form'
import close from '../../assets/close.svg'
import propTypes from 'prop-types'
import Button from '../Button/Button'
import './ContactForm.css'

export default function ContactForm({ onClick }) {
	// const methods = useForm()
	return (
		<div
			className='blackout'
			// onClick={onClick}
			onClick={e => (e.target.className === 'blackout' ? onClick() : null)}
		>
			<div className='close-button'>
				<img src={close} onClick={onClick} />
			</div>
			<form className='contact-form'>
				<div>
					<label htmlFor='email'>Email</label>
					<input type='email' name='email' id='email' />
				</div>
				<div>
					<label htmlFor='tel'>Телефон</label>
					<input type='tel' name='tel' id='tel' />
				</div>
				<div>
					<label htmlFor='comment'>Телефон</label>
					<textarea cols='35' rows='3' name='message' id='comment' />
				</div>
				<div>
					<Button
						className={'button-form'}
						label='Отправить'
						onClick={e => e.preventDefault()}
					/>
				</div>
			</form>
		</div>
	)
}

ContactForm.propTypes = {
	onClick: propTypes.func,
}
