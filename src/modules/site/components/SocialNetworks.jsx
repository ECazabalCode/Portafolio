import { useContext } from 'react'
import AppContext from '../../../context/AppContext'

function SocialNetworks() {
    const appContext = useContext(AppContext)

    const handleClick = () => {
        const language = appContext.language === 'en' ? 'es' : 'en'
        appContext.setLanguage(language)
    }

    return (
        <div className="flex gap-2 px-3 items-center ml-auto lg:m-0 lg:ms-auto">
            <button href="#" className="cursor-pointer p-3 hover:bg-gray-100 rounded flex text-xs gap-1" onClick={handleClick}>
                <img className="w-4" src='src/assets/language.svg' alt="language" />
                <p>{appContext.language}</p>
            </button>
            <a href="#" className="p-3 hover:bg-gray-100 rounded">
                <img
                    className="w-4"
                    src="src/assets/github-outline.svg" alt="github" />
            </a>
            <a href="#" className="p-3 hover:bg-gray-100 rounded">
                <img
                    className="w-4"
                    src="src/assets/linkedin_social_icon.svg" alt="linkedin" />
            </a>
            <a href="#" className="p-3 hover:bg-gray-100 rounded">
                <img
                    className="w-4"
                    src="src/assets/email-outline.svg" alt="email" />
            </a>
        </div>
    )
}

export default SocialNetworks