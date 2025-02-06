import { v4 as uuid } from 'uuid'
import { Link } from 'react-router-dom'
import './Menu.css'

export default function Menu() {
	const Menu = [
		{ title: 'На главную', to: '/', key: uuid() },
		{ title: 'Работы', to: '/works', key: uuid() },
		{ title: 'Отзывы', to: '/testimonials', key: uuid() },
		{ title: 'Блог', to: '/blog', key: uuid() },
	]
	return (
		<nav>
			<ul className='menu'>
				{Menu.map(({ title, key, to }) => (
					<Link key={key} to={to}>
						{title}
					</Link>
				))}
			</ul>
		</nav>
	)
}
