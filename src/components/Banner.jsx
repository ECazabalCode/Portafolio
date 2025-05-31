import Button from './Button'
import Container from './Container'
import Line from './Line'

function Banner() {
    return (
        <>
            <div className="flex items-center justify-center flex pt-37 pb-12 md:pt-60 px-4 md:pb-37">
                <div className='flex flex-col justify-center items-center gap-5 max-w-full md:max-w-6/12'>
                    <h1 className="font-bold text-4xl md:text-6xl text-center">Hi, I'm EduardoCode</h1>
                    <p className="text-gray-500 text-xl md:text-2xl text-center">Full Stack Developer specializing in building exceptional digital experiences</p>
                    <Container config={{ direction: 'auto' }}>
                        <Button modifiers='grow'>Get in Touch</Button>
                        <Button modifiers='grow' color='white'>View My Work</Button>
                    </Container>
                </div>
            </div>
            <Line />
        </>
    )
}

export default Banner