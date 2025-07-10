import {useContext} from 'react'
import Button from '../../common/components/Button'
import AppContext from '../../../context/AppContext'
import placeholder from '/src/assets/placeholder.svg'
import getTextByLanguage from '../../../utils/get-text-by-language'
import ViewPortAnimator from '../../common/components/ViewPortAnimator.jsx'
import '../css/about-me.css'

function AboutMe() {
    const appContext = useContext(AppContext)

    const handleClick = () => {
        location.href = './Ángel Eduardo Cazabal Salas.pdf'
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 py-12 md:py-32 gap-10 border-b border-gray-200 w-full px-4 grow overflow-x-hidden"
             id="about-me">
            <ViewPortAnimator
                inputAnimation="about-me-appear-from-left"
                outAnimation="about-me-out-to-left">
                <div className="bg-gray-200 rounded-xl grow overflow-hidden">
                    <img src={placeholder} alt="placeholder"/>
                </div>
            </ViewPortAnimator>
            <ViewPortAnimator
                inputAnimation="about-me-appear-from-right"
                outAnimation="about-me-out-to-right">
                <div className="flex flex-col justify-center gap-6 w-full grow">
                    <div className="overflow-hidden">
                        <h1 className="font-bold text-3xl">{getTextByLanguage(appContext.language, 'about-me')}</h1>
                    </div>
                    <p className="text-gray-500">
                        {getTextByLanguage(appContext.language, 'about-me-description-first-part')}
                    </p>
                    <p className="text-gray-500">
                        {getTextByLanguage(appContext.language, 'about-me-description-second-part')}
                    </p>
                    <Button
                        onClick={handleClick}
                        color="white"
                        modifiers="mr-auto"
                        style={{padding: '0.6rem 1rem'}}>
                        {getTextByLanguage(appContext.language, 'download-resume')}
                    </Button>
                </div>
            </ViewPortAnimator>
        </div>
    )
}

export default AboutMe