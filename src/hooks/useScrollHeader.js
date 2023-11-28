import { useCallback } from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import {changeHeaderHeight} from '../store/headerSlice';

export const useScrollHeader = () =>
{
    const [isHeaderClosed, setHeaderClosed] = useState(false)
    const [isSubheaderFixed, setSubheaderFixed] = useState(false)
    const [lastScrollToTop, setLastScrollToTop] = useState(0)
    const headerHeight = useSelector(state => state.headerHeight.headerHeight)

    const handleScroll = useCallback(() => {
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
    }, [lastScrollToTop])

    useEffect(() =>
    {
        window.addEventListener('scroll', handleScroll)
        // console.log('scroll');
        return () =>
        {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollToTop, handleScroll])

    const headerClosedStyles =
    {
        position: (isHeaderClosed && isSubheaderFixed) ? 'fixed' : (!isHeaderClosed && isSubheaderFixed) ? 'fixed' : 'fixed',
        top: (isHeaderClosed && isSubheaderFixed) ? `- ${headerHeight}`: (!isHeaderClosed && isSubheaderFixed) ? 0 : 0,
        left: 0,
        right: 0,
    }

    // -80px
    console.log(headerHeight);

    const fixedSubheaderStyles =
    {
        position: isSubheaderFixed ? 'fixed' : 'fixed',
        top: isHeaderClosed ? 0 : headerHeight,
        left: 0,
        right: 0,
    }

    return {headerClosedStyles, fixedSubheaderStyles}
}