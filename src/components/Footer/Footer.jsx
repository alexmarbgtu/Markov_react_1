import Menu from '../Menu/Menu'
import './Footer.css'
import useResize from '../../hooks/useResize'

export default function Footer() {
  const width = useResize()
	return (
		<>
			{width > 768 && (
				<footer className='footer'>
					<Menu />
				</footer>
			)}
		</>
	)
}
