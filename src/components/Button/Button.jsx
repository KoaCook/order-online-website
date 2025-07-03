import React from 'react';
import Link from 'next/link';

/**
 * Reusable Button component.
 *
 * Props:
 * - children: ReactNode - Button label/content
 * - disabled: boolean - If true, button is disabled
 * - className: string - Additional classes
 * - variant: 'solid' | 'surface' | 'outline' - Button style variant (default: 'solid')
 * - href: string - If provided, renders as a Next.js Link
 * - ...rest: any - Other button props (e.g., onClick)
 */
const Button = ({
    children,
    disabled = false,
    className = '',
    variant = 'solid',
    href,
    ...rest
}) => {
    // Base styles for the button
    const baseStyles =
        'w-full text-sm px-4 h-10 uppercase rounded-md transition flex items-center justify-center';

    // Variant styles
    const variantStyles = {
        solid: 'bg-primary text-white ripple-primary',
        surface: 'bg-transparent text-black border border-transparent ripple',
        outline: 'bg-transparent text-primary border border-primary ripple',
    };

    // Disabled state styles
    const disabledStyles =
        'bg-[rgba(0,0,0,.12)] pointer-events-none text-[rgba(0,0,0,.26)] border border-transparent';

    const computedClassName = [
        baseStyles,
        disabled ? disabledStyles : variantStyles[variant] || variantStyles.solid,
        className,
    ].join(' ');

    if (href && !disabled) {
        // Render as Next.js Link
        return (
            <Link href={href} className={computedClassName} {...rest}>
                {children}
            </Link>
        );
    }

    // Render as button
    return (
        <button className={computedClassName} disabled={disabled} {...rest}>
            {children}
        </button>
    );
};

export default Button;
