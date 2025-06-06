import { TextArea, TextField } from '../../common/components/Form'
import linkedin from '/src/assets/linkedin_social_icon.svg'
import email from '/src/assets/email-outline.svg'
import github from '/src/assets/github-outline.svg'
import Button from '../../common/components/Button'

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
    return (
        <form className='flex flex-col gap-4 grow' id='contact'>
            <div className='grid gap-4 grid-cols-2'>
                <TextField id='name' placeholder='Your name' label='Name' required />
                <TextField id='email' type='email' placeholder='Your email' label='Email' required />
            </div>
            <TextField id='subject' label='Subject' placeholder='Subject' required />
            <TextArea id="message" rows='5' label='Message' placeholder='Your Message' />
            <Button>Send Message</Button>
        </form>
    )
}

function Contact() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 py-12 md:py-24 gap-12 px-4 md:gap-1 w-full grow" id='contact'>
            <div className="flex flex-col gap-5 grow">
                <h3 className="text-3xl font-bold">Get In Touch</h3>
                <p className="text-gray-600">I'm currently open to new opportunities and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out!</p>
                <SocialNetworksContact />
            </div>
            <ContactForm />
        </div>
    )
}

export default Contact