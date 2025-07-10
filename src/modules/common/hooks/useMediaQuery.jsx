import {useEffect, useState} from 'react'

function useMediaQuery(query){
    const [matches, setMatches] = useState(window.matchMedia(query).matches)

    useEffect(() => {
        const mediaQuery = window.matchMedia(query)
        mediaQuery.addEventListener('change', () => setMatches(window.matchMedia(query).matches))
    }, [query])

    return { matches }
}

export default useMediaQuery