
import Menu from '../Menu/Menu'
import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import { IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'


import './Header.css'
import useResize from '../../hooks/useResize'
import BurgerButton from '../BurgerMenu/BurgerButton'
import { useContext } from 'react'
import { ThemeContext } from '../../context/context'


export default function Header() {
	const navigate = useNavigate()
  const width = useResize()
  const {theme, toggleTheme} = useContext(ThemeContext)
  const ButtonDark = styled(IconButton)({
		color: '#2c363f',
	})
  const ButtonLight = styled(IconButton)({
		color: '#fff',
	})
  
	return (
		<header className='header'>
			{width > 768 && (
				<>
					<div className='logo'>Aleksandr Markov</div>
					<Menu />
				</>
			)}
			{width <= 768 && <BurgerButton />}
			<Button
				className='button-contact'
				onClick={() => navigate('/contacts')}
				label='Контакты'
			/>
			{/* <ButtonMui
				variant='outlined'
				color='#2c363f'
				onClick={() => toggleTheme()}
			>
				{theme === 'dark' && <Brightness3Icon />}
				{theme === 'light' && <Brightness7Icon />}
			</ButtonMui> */}
			{theme === 'light' && (
				<ButtonDark onClick={() => toggleTheme()}>
					<DarkModeIcon />
				</ButtonDark>
			)}
			{theme === 'dark' && (
				<ButtonLight onClick={() => toggleTheme()}>
					<LightModeIcon />
				</ButtonLight>
			)}
		</header>
	)
}
