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
 * @returns 
 */
function Card({ children, barColor, ...props }) {
    return (
        <div className="flex bg-white flex-col overflow-hidden border border-gray-200 shadow-xs rounded-md" {...props}>
            {barColor && <div className={`${getColor(barColor)} w-full h-1`}></div>}
            {children}
        </div>
    )
}

function Header({ children, ...props }) {
    return (
        <div className="flex gap-4 items-center px-6 grow" {...props}>
            {children}
        </div>
    )
}

function Body({ children, ...props }) {
    return (
        <div className="flex flex-col px-6 py-2" {...props}>
            {children}
        </div>
    )
}

function Footer({ children, ...props }) {
    return (
        <div className="flex flex-col px-6 pb-4" {...props}>
            {children}
        </div>
    )
}

Card.Header = Header
Card.Body = Body
Card.Footer = Footer

export default Card