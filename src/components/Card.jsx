/**
 * 
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

function Card({ children, barColor }) {
    return (
        <div className="flex grow bg-white flex-col overflow-hidden border border-gray-200 shadow-xs rounded-md gap-4 shadow-sm">
            <div className={`${getColor(barColor)} w-full h-1`}></div>
            {children}
        </div>
    )
}

function Header({ children }) {
    return (
        <div className="flex gap-4 items-center px-6">
            {children}
        </div>
    )
}

function Body({ children }) { 
    return (
        <div className="flex flex-col px-6 pb-8">
            {children}
        </div>
    )
}

Card.Header = Header
Card.Body = Body

export default Card