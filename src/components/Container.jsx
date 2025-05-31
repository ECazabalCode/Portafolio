/**
 * 
 * @param {{ direction: 'row' | 'col' | 'auto', }} config 
 * @returns {string}
 */
const buildClass = (config) => {
    let className = 'flex'
    if (config?.direction === 'row') {
        className += ' flex-row'
    } else if (config?.direction === 'col') {
        className += ' flex-col'
    } else if (config?.direction === 'auto') {
        className += ' flex-row flex-wrap'
    }
    className+=' gap-2'
    return className
}
/**
 * 
 * @param {{ direction: 'row' | 'col' | 'auto' }} config 
 * @param {ReactNode} children
 * @returns {JSX.Element}
 */
function Container({ children, config = { direction: 'auto' } }) {
    return (
        <div className={buildClass(config)}>
            {children}
        </div>
    )
}

export default Container