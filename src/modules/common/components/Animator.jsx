import { useEffect, useRef } from 'react'

const DEFAULT_ANIM = {
    keyframe: [
        { opacity: 0, transform: 'scale(0)' },
        { opacity: 1, transform: 'scale(1)' },
    ], options: { duration: 300, iterations: 1 }
}
/**
 * @typedef Animation
 * @property {Keyframe} keyframe 
 * @property {number | KeyframeAnimationOptions | undefined} options
 * 
 * @typedef AnimatorProps
 * @property {Animation} animation
 * @property {import('react').ReactNode} children
 * @property {boolean} inteseccingAnimationIsEnabled
 */
/**
 * @param {AnimatorProps} animatorProps
 * @returns {JSX.Element}
 */
function Animator({ children, animation = DEFAULT_ANIM, inteseccingAnimationIsEnabled = false }) {
    const componentRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            /** @type {HTMLDivElement} */
            const $component = componentRef.current
            entries.forEach(entry => {
                if (entry.isIntersecting && inteseccingAnimationIsEnabled) {
                    $component.animate(animation.keyframe, animation.options)
                }
                if (entry.boundingClientRect.bottom <= 30) {
                    $component.animate([
                        { opacity: 1, transform: 'scale(1)' },
                        { opacity: 0, transform: 'scale(0)' },
                    ], animation.options)
                }
            })
        })
        observer.observe(componentRef.current)
    }, [])
    return (
        <div ref={componentRef} >
            {children}
        </div>
    )
}

export default Animator