/**
 * @typedef Config
 * @property { 'row' | 'col' | 'auto' } direction
 */

/**
 * @typedef ContainerProps
 * @property {import("react").ReactNode} children
 * @property {Config} config
 */

/**
 * Build the class of component
 * @param {Config} config 
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
 * This create flex container
 * @param {ContainerProps}
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