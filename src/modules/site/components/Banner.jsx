import Container from '../../common/components/Container'
import Button from '../../common/components/Button'
import Line from '../../common/components/Line'
import Animator from '../../common/components/Animator'

function Banner() {
    return (
        <>
            <Animator inteseccingAnimationIsEnabled={true}>
                <div className='flex items-center justify-center pt-37 pb-12 md:pt-60 px-4 md:pb-37 appear'>
                    <div className='flex flex-col justify-center items-center gap-5 max-w-full md:max-w-6/12'>
                        <h1 className="flex font-bold text-4xl md:text-6xl">Hi, I'm EduardoCode</h1>
                        <p className="text-gray-500 text-xl md:text-2xl text-center">Full Stack Developer specializing in building exceptional digital experiences</p>
                        <Container config={{ direction: 'auto' }}>
                            <Button modifiers='grow'>Get in Touch</Button>
                            <Button modifiers='grow' color='white'>View My Work</Button>
                        </Container>
                    </div>
                </div>
            </Animator>
            <Line />
        </>
    )
}

export default Banner