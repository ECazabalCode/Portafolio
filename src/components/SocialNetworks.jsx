function SocialNetworks() {
    return (
        <div className="flex gap-2 px-3 items-center ml-auto lg:m-0">
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