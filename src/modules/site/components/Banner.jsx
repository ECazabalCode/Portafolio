import {useContext} from 'react'
import Line from '../../common/components/Line'
import Button from '../../common/components/Button'
import AppContext from '../../../context/AppContext'
import Container from '../../common/components/Container'
import getTextByLanguage from '../../../utils/get-text-by-language'
import ViewPortAnimator from '../../common/components/ViewPortAnimator.jsx'
import '../css/banner.css'

function Banner() {
    const appContext = useContext(AppContext)

    return (
        <>
            <div className="flex items-center justify-center pt-37 pb-12 md:pt-60 px-4 md:pb-37 banner-slide-from-down">
                <div className="flex flex-col justify-center items-center gap-5 max-w-full md:max-w-6/12">
                    <h1 className="flex font-bold text-4xl md:text-6xl text-center">{getTextByLanguage(appContext.language, 'greetings')}</h1>
                    <p className="text-gray-500 text-xl md:text-2xl text-center">{getTextByLanguage(appContext.language, 'description')}</p>
                    <Container config={{direction: 'auto'}}>
                        <Button modifiers="grow"
                                onClick={() => location.href = '#contact'}>{getTextByLanguage(appContext.language, 'get-in-touch')}</Button>
                        <Button modifiers="grow"
                                color="white">{getTextByLanguage(appContext.language, 'view-my-work')}</Button>
                    </Container>
                </div>
            </div>
            <Line/>
        </>
    )
}

export default Banner