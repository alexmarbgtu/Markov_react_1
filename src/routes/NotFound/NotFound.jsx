import { Fragment } from 'react'
import photo from '../../assets/фон.png'
import Layout from '../../components/Layout/Layout'
import useResize from '../../hooks/useResize'

import './NotFound.css'

export default function Blogs() {
  const width = useResize()
  return (
		<Fragment>
			<Layout className={width > 768 ? 'main-notfound' : 'main-notfound__small'}>
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