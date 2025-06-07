import { useContext } from 'react'
import SocialNetworks from './SocialNetworks'
import AppContext from '../../../context/AppContext'
import getTextByLanguage from '../../../utils/get-text-by-language'

function Navbar() {
    const appContext = useContext(AppContext)

    return (
        <nav className="bg-white border-b border-gray-200 py-3 fixed left-0 right-0 flex items-center" style={{ backgroundColor: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(8px)' }}>
            <div className="ps-4 mr-auto">
                <h1 className="text-xl font-bold">EduardoCode</h1>
            </div>
            <div className="hidden lg:flex gap-6 font-medium text-sm m-auto">
                <a href="#about-me">{getTextByLanguage(appContext.language,'about-me')}</a>
                <a href="#skills">{getTextByLanguage(appContext.language,'skills')}</a>
                <a href="#contact">{getTextByLanguage(appContext.language, 'contact')}</a>
            </div>
            <SocialNetworks />
        </nav>
    )
}

export default Navbar