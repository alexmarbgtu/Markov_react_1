import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import propTypes, { string } from 'prop-types'


export default function Layout({ children, className }) {
	return (
		<>
			<Header />
			<main className={className}>{children}</main>
			<Footer />
		</>
	)
}

Layout.propTypes = {
	children: propTypes.node,
	className: string,
}
