import MenuIcon from '@mui/icons-material/Menu'
import { useEffect, useState } from 'react'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import './BurgerButton.css'

export default function BurgerButton() {
  const [stateBergerMenu, setStateBergerMenu] = useState(false)
  useEffect(() => {
    const handleClick = () => setStateBergerMenu(false)
    window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [])
  return (
		<>
			<div
				className='burger-button'
				onClick={(e) => {
          e.stopPropagation()
					e.nativeEvent.stopImmediatePropagation()
					setStateBergerMenu(!stateBergerMenu)
				}}
			>
				<MenuIcon />
				{stateBergerMenu && <BurgerMenu />}
			</div>
		</>
	)
}