
import { Routes, Route } from 'react-router-dom'
import Main from './routes/Main/Main'
import './App.css'
import Blogs from './routes/Blogs/Blogs'
import BlogPost from './routes/BlogPost/BlogPost'


import Contact from './routes/Contact/Contact'
import NotFound from './routes/NotFound/NotFound'
import ThemeProvider from './components/ThemeProvider/ThemeProvider'

function App() {

	return (
		<ThemeProvider>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/blog' element={<Blogs />} />
				<Route path='/blog/:postId' element={<BlogPost />} />
				{/* <Route path='/contacts' element={<Contact />} />
			<Route path='/works' element={<NotFound />} />
			<Route path='/testimonials' element={<NotFound />} /> */}
				<Route path='/*' element={<NotFound />} />
			</Routes>
		</ThemeProvider>
	)
}

export default App