import { useContext } from 'react'
import AppContext from '../../../context/AppContext'
import emailIcon from '/src/assets/email-outline.svg'
import githubIcon from '/src/assets/github-outline.svg'
import linkedinIcon from '/src/assets/linkedin_social_icon.svg'
import languageIcon from '/src/assets/language.svg'

function SocialNetworks() {
    const appContext = useContext(AppContext)

    const handleClick = () => {
        const language = appContext.language === 'en' ? 'es' : 'en'
        appContext.setLanguage(language)
    }

    return (
        <div className="flex gap-2 px-3 items-center ml-auto lg:m-0 lg:ms-auto">
            <button href="#" className="cursor-pointer p-3 hover:bg-gray-100 rounded flex text-xs gap-1" onClick={handleClick}>
                <img className="w-4" src={languageIcon} alt="language" />
                <p>{appContext.language}</p>
            </button>
            <a href="https://github.com/ECazabalCode" target='_blank' className="p-3 hover:bg-gray-100 rounded">
                <img
                    className="w-4"
                    src={githubIcon} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/eduardo-salas-68773b1a7/" target='_blank' className="p-3 hover:bg-gray-100 rounded">
                <img
                    className="w-4"
                    src={linkedinIcon} target='_blank' alt="linkedin" />
            </a>
            <a href="mailto:eduardocazabalsalas@gmail.com" className="p-3 hover:bg-gray-100 rounded">
                <img
                    className="w-4"
                    src={emailIcon} alt="email" />
            </a>
        </div>
    )
}

export default SocialNetworks