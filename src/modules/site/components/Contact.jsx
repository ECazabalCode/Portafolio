import { useContext } from 'react'
import email from '/src/assets/email-outline.svg'
import Button from '../../common/components/Button'
import github from '/src/assets/github-outline.svg'
import AppContext from '../../../context/AppContext'
import linkedin from '/src/assets/linkedin_social_icon.svg'
import { TextArea, TextField } from '../../common/components/Form'
import getTextByLanguage from '../../../utils/get-text-by-language'

function SocialNetworksContact() {
    return (
        <div className='flex flex-col gap-4 text-md'>
            <div className="flex gap-3 text-xs md:text-md">
                <img style={{ width: '1.3rem' }} src={email} alt='email' />
                <a target='_blank' href="mailto:eduardocazabalsalas@gmail.com">eduardocazabalsalas@gmail.com</a>
            </div>
            <div className="flex gap-3 text-xs md:text-md">
                <img style={{ width: '1.3rem' }} src={linkedin} alt='email' />
                <a target='_blank' href="mailto:eduardocazabalsalas@gmail.com">eduardocazabalsalas@gmail.com</a>
            </div>
            <div className="flex gap-3 text-xs md:text-md">
                <img style={{ width: '1.3rem' }} src={github} alt='github' />
                <a href="#">https://github.com/ECazabalCode</a>
            </div>
        </div>
    )
}

function ContactForm() {
    const appContext = useContext(AppContext)
    return (
        <form className='flex flex-col gap-4 grow' id='contact'>
            <div className='grid gap-4 grid-cols-2'>
                <TextField id='name' placeholder={getTextByLanguage(appContext.language, 'contact-name-field-placeholder')} label={getTextByLanguage(appContext.language, 'contact-name-field-label')} required />
                <TextField id='email' type='email' placeholder={getTextByLanguage(appContext.language, 'contact-email-field-placeholder')} label={getTextByLanguage(appContext.language, 'contact-email-field-label')} required />
            </div>
            <TextField id='subject' label={getTextByLanguage(appContext.language, 'contact-subject-field-label')} placeholder={getTextByLanguage(appContext.language, 'contact-subject-field-placeholder')} required />
            <TextArea id="message" rows='5' label={getTextByLanguage(appContext.language, 'contact-message-field-label')} placeholder={getTextByLanguage(appContext.language, 'contact-message-field-placeholder')} />
            <Button>{getTextByLanguage(appContext.language, 'send-message')}</Button>
        </form>
    )
}

function Contact() {
    const appContext = useContext(AppContext)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 py-12 md:py-24 gap-12 px-4 md:gap-1 w-full grow" id='contact'>
            <div className="flex flex-col gap-5 grow">
                <h3 className="text-3xl font-bold">{getTextByLanguage(appContext.language, 'get-in-touch')}</h3>
                <p className="text-gray-600">{getTextByLanguage(appContext.language, 'contact-description')}</p>
                <SocialNetworksContact />
            </div>
            <ContactForm />
        </div>
    )
}

export default Contact