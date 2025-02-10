
import { Routes, Route } from 'react-router-dom'
import Main from './routes/Main/Main'
import './App.css'
import Blogs from './routes/Blogs/Blogs'
import Contact from './routes/Contact/Contact'
import NotFound from './routes/NotFound/NotFound'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Main />} />
			<Route path='/blog' element={<Blogs />} />
			<Route path='/blog/:postId' element={<Blogs />} />
			{/* <Route path='/contacts' element={<Contact />} />
			<Route path='/works' element={<NotFound />} />
			<Route path='/testimonials' element={<NotFound />} /> */}
			<Route path='/*' element={<NotFound />} />
		</Routes>
	)
}

export default App