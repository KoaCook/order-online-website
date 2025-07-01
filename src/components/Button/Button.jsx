import React from 'react';

/**
 * Reusable Button component.
 *
 * Props:
 * - children: ReactNode - Button label/content
 * - disabled: boolean - If true, button is disabled
 * - className: string - Additional classes
 * - variant: 'solid' | 'surface' - Button style variant (default: 'solid')
 * - ...rest: any - Other button props (e.g., onClick)
 */
const Button = ({ children, disabled = false, className = '', variant = 'solid', ...rest }) => {
    // Base styles for the button
    const baseStyles = 'w-full text-sm px-4 h-10 uppercase rounded-md mt-6 transition';

    // Variant styles
    const variantStyles = {
        solid: 'bg-primary text-white ripple-primary',
        surface: 'bg-transparent text-black border border-transparent ripple',
    };

    // Disabled state styles
    const disabledStyles =
        'bg-[rgba(0,0,0,.12)] pointer-events-none text-[rgba(0,0,0,.26)] border border-transparent';

    return (
        <button
            className={[
                baseStyles,
                disabled ? disabledStyles : variantStyles[variant] || variantStyles.solid,
                className,
            ].join(' ')}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
