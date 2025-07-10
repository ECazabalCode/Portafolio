import {useInView} from 'react-intersection-observer'

const SCREENS = {
    mobile: '(max-width: 1024px)',
    desktop: '(min-width: 1025px)'
}

/**
 * Made animations by viewport state
 * @param {string} inputAnimation
 * @param {string} outAnimation
 * @param {string} modifiers
 * @param {import('react').ReactNode} children
 * @returns {JSX.Element}
 */
function ViewPortAnimator({inputAnimation, outAnimation, modifiers, children}) {
    const {ref, inView} = useInView({
        rootMargin: '0px 0px -125px 0px',
        threshold: 0.1
    })

    return (
        <div ref={ref} className={`${inView ? inputAnimation : outAnimation} ${modifiers}`}>
            {children}
        </div>
    )
}

export default ViewPortAnimator