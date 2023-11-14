import { useState, useEffect } from 'react';

export const useScrollHeader = () =>
{
    const [isHeaderClosed, setHeaderClosed] = useState(false)
    const [isSubheaderFixed, setSubheaderFixed] = useState(false)
    const [lastScrollToTop, setLastScrollToTop] = useState(0)

    useEffect(() =>
    {
        window.addEventListener('scroll', handleScroll)

        return () =>
        {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollToTop])

    function handleScroll()
    {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop

        if (currentScrollTop === 0)
        {
            setHeaderClosed(false)
            setSubheaderFixed(false)
        }
        else if (currentScrollTop > lastScrollToTop)
        {
            setHeaderClosed(true)
            setSubheaderFixed(true)
        }
        else
        {
            setHeaderClosed(false)
        }

        setLastScrollToTop(currentScrollTop)
    }

    const headerClosedStyles =
    {
        position: (isHeaderClosed && isSubheaderFixed) ? 'fixed' : (!isHeaderClosed && isSubheaderFixed) ? 'fixed' : 'fixed',
        top: (isHeaderClosed && isSubheaderFixed) ? '-80px' : (!isHeaderClosed && isSubheaderFixed) ? 0 : 0,
        left: 0,
        right: 0,
    }

    const fixedSubheaderStyles =
    {
        position: isSubheaderFixed ? 'fixed' : 'fixed',
        top: isHeaderClosed ? 0 : '80px',
        left: 0,
        right: 0,
    }

    return {headerClosedStyles, fixedSubheaderStyles}
}