/**
 * @param {string} color 
 * @returns {string}
 */
function getColor(color) {
    switch (color) {
        case 'purple': return 'bg-indigo-500'
        case 'green': return 'bg-green-600'
        case 'orange': return 'bg-orange-400'
    }
    throw Error('Color not found')
}

/**
 * @param {string} barColor
 * @param {import("react").ReactNode} children
 * @param {string} modifiers
 * @param props
 * @returns {React.JSX.Element}
 */
function Card({ children, barColor, modifiers = '', ...props }) {
    return (
        <div className={`bg-white overflow-hidden border border-gray-200 shadow-xs rounded-md ${modifiers}`} {...props}>
            {barColor && <div className={`${getColor(barColor)} w-full h-1`}></div>}
            {children}
        </div>
    )
}

function Header({ children, ...props }) {
    return (
        <div className="flex gap-4 py-3.5 items-center px-6 grow" {...props}>
            {children}
        </div>
    )
}

function Body({ children, ...props }) {
    return (
        <div className="flex flex-col px-6 pt-2 pb-6" {...props}>
            {children}
        </div>
    )
}

function Footer({ children, ...props }) {
    return (
        <div className="flex flex-col px-6 pb-4 justify-end" {...props}>
            {children}
        </div>
    )
}

Card.Header = Header
Card.Body = Body
Card.Footer = Footer

export default Card