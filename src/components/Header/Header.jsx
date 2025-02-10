
import Menu from '../Menu/Menu'
import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import './Header.css'

export default function Header() {
	const navigate = useNavigate()
	return (
		<header className='header'>
			<div className='logo'>Aleksandr Markov</div>
			<Menu />
			<Button
				className='button-contact'
				onClick={() => navigate('/contacts')}
				label='Контакты'
			/>
				
		</header>
	)
}
