import SocialNetworks from './SocialNetworks'

function Navbar() {
    return (
        <nav className="bg-white border-b border-gray-200 py-3 fixed left-0 right-0 flex items-center" style={{ backgroundColor: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(8px)' }}>
            <div className="ps-4">
                <h1 className="text-xl font-bold">EduardoCode</h1>
            </div>
            <div className="hidden lg:flex gap-6 font-medium text-sm m-auto">
                <a href="#about-me">About</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </div>
            <SocialNetworks />
        </nav>
    )
}

export default Navbar