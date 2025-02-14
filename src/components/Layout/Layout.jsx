import { useContext } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import propTypes, { string } from 'prop-types'
import { ThemeContext } from '../../context/context'
import cn from 'classnames'


export default function Layout({ children, className }) {
  const {theme} = useContext(ThemeContext)
  console.log(theme)
	return (
		<>
			<Header />
			<main className={cn(className, theme)}>{children}</main>
			<Footer />
		</>
	)
}

Layout.propTypes = {
	children: propTypes.node,
	className: string,
}
