import { Fragment, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import Button from '../../components/Button/Button'
import photo from '../../assets/program.png'
// import ContactForm from '../../components/ContactForm/ContactForm'
import ContactForm2 from '../../components/ContactForm2/ContactForm2'
import './Main.css'

export default function Main() {
	const [contactFormState, displayContactForm] = useState(false)

  // const [open, setOpen] = useState(false)


	return (
		<Fragment>
			<Layout className='main'>
				<div className='main-container-info'>
					{/* <span className='main-rectangle'></span> */}
					<div className='h1-container'>
						<h1 className='main-h1'>Меня зовут Александр,</h1>
						<h1 className='main-h1'> я веб разработчик</h1>
					</div>
					<p className='main-p'>
						Я создаю высокопроизводительные, красивые веб-сайты, которые
						ориентированы на конверсию, соответствуют бренду и удобны для людей.
					</p>
					<Button
						className={'button-form'}
						onClick={() => displayContactForm(true)}
						label='Связаться со мной'
					/>
				</div>
				<img className='main-photo' src={photo} />
			</Layout>
			{contactFormState && (
				<ContactForm2 onClick={() => displayContactForm(false)} />
			)}
		</Fragment>
	)
}
