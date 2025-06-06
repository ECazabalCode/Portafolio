import SocialNetworks from './SocialNetworks'

const Footer = () => (
    <footer className="flex flex-row flex-wrap border-t border-t-gray-200 py-5.5 md:py-9.5 px-4 mt-14 flex sm:justify-between md:items-center justify-center">
        <div className="py-3">
            <h4 className="text-sm text-gray-500 text-center">© {new Date().getFullYear()} EduardoCode. All rights reserved.</h4>
        </div>
        <div className="justify-center">
            <SocialNetworks />
        </div>
    </footer>
)

export default Footer