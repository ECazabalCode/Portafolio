const BASE_CLASE = 'py-3 px-8 rounded-md text-sm font-medium cursor-pointer'

function Button({ children, color = 'black', modifiers = '', ...props }){
    if(color === 'black'){
        return (
            <button className={`${BASE_CLASE} bg-black hover:bg-gray-800 text-white ${modifiers}
            `} {...props}>
                {children}
            </button>
        )
    }else if(color === 'white'){
        return (
            <button className={`${BASE_CLASE} hover:bg-gray-100 border border-gray-200 text-black ${modifiers}`} {...props}>
                {children}
            </button>
        )
    }
    throw Error('Not valid color')
}

export default Button