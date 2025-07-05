import React, { useEffect, useState } from 'react';

/**
 * LoadingState
 * Renders its children only after a specified delay.
 * Parent component should render LoadingState only when loading is true.
 *
 * @param {number} delay - Delay in milliseconds before showing children (default: 1200ms).
 * @param {React.ReactNode} children - The loading UI to render.
 */
const LoadingState = ({ delay = 1200, children }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return show ? children : null;
};

export default LoadingState;
