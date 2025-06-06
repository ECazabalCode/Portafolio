import Button from '../../common/components/Button'
import placeholder from '/src/assets/placeholder.svg'

function AboutMe() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 py-12 md:py-32 gap-10 border-b border-gray-200 w-full px-4 grow">
            <div className="bg-gray-200 rounded-xl grow overflow-hidden">
                <img src={placeholder} alt="placeholder" />
            </div>
            <div className="flex flex-col justify-center gap-6 w-full grow">
                <h1 className="font-bold text-3xl">About Me</h1>
                <p className="text-gray-500">
                    I'm a passionate developer with a strong foundation in both front-end and back-end technologies. With several years of experience building web applications, I focus on creating intuitive, responsive, and accessible user experiences.
                </p>
                <p className="text-gray-500">
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities. I believe in continuous learning and staying up-to-date with the latest industry trends.
                </p>
                <Button
                    color='white'
                    modifiers='mr-auto'
                    style={{ padding: '0.6rem 1rem' }}>
                    Download Resume
                </Button>
            </div>
        </div>
    )
}

export default AboutMe