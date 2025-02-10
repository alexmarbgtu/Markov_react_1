import { Fragment } from 'react'
import photo from '../../assets/фон.png'
import Layout from '../../components/Layout/Layout'

import './NotFound.css'

export default function Blogs() {
  return (
		<Fragment>
			<Layout className='main-notfound'>
				<div className='main-notfound__title'>
					<h1 className='main-notfound__h1'>Страница в разработке</h1>
					<h2 className='main-notfound__h2'>
						осталось подождать ещё чуть-чуть...
					</h2>
				</div>
				<img className='main-notfound__img' src={photo} />
			</Layout>
		</Fragment>
	)
}