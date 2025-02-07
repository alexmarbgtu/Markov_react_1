
import { Routes, Route } from 'react-router-dom'
import Main from './routes/Main/Main'
import './App.css'
import Blogs from './routes/Blogs/Blogs'
import Contact from './routes/Contact/Contact'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Main />} />
			<Route path='/blog' element={<Blogs />} />
			<Route path='/contacts' element={<Contact />} />
		</Routes>
	)
}

export default App