import { useState, useEffect } from 'react';

/**
 * useBreakpoint
 * Returns the current window width and booleans for common breakpoints.
 *
 * @returns {{
 *   width: number | undefined,
 *   isXs: boolean,
 *   isSm: boolean,
 *   isMd: boolean,
 *   isLg: boolean,
 *   isXl: boolean,
 * }}
 */
const breakpoints = {
    sm: 600,
    md: 960,
    lg: 1024,
    xl: 1264,
};

export default function useBreakpoint() {
    const [width, setWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : undefined,
    );

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        // Set initial width in case it changed before effect ran
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return {
        width,
        isXs: width !== undefined && width < breakpoints.sm,
        isSm: width !== undefined && width >= breakpoints.sm && width < breakpoints.md,
        isMd: width !== undefined && width >= breakpoints.md && width < breakpoints.lg,
        isLg: width !== undefined && width >= breakpoints.lg && width < breakpoints.xl,
        isXl: width !== undefined && width >= breakpoints.xl,
    };
}
