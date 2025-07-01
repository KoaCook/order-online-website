import React from 'react';

/**
 * Reusable Button component.
 *
 * Props:
 * - children: ReactNode - Button label/content
 * - disabled: boolean - If true, button is disabled
 * - className: string - Additional classes
 * - ...rest: any - Other button props (e.g., onClick)
 */
const Button = ({ children, disabled = false, className = '', ...rest }) => {
    // Base styles for the button
    const baseStyles = 'w-full text-sm px-4 h-10 uppercase rounded-md mt-6 transition';
    // Enabled state styles
    const enabledStyles = 'bg-primary text-white ripple-primary';
    // Disabled state styles
    const disabledStyles = 'bg-[rgba(0,0,0,.12)] pointer-events-none text-[rgba(0,0,0,.26)]';

    return (
        <button
            className={[baseStyles, disabled ? disabledStyles : enabledStyles, className].join(' ')}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
