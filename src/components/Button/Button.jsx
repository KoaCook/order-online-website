import React from 'react';
import Link from 'next/link';

/**
 * Reusable Button component.
 *
 * Props:
 * - children: ReactNode - Button label/content
 * - disabled: boolean - If true, button is disabled
 * - isLoading: boolean - If true, show loader instead of content
 * - className: string - Additional classes
 * - variant: 'solid' | 'surface' | 'outline' - Button style variant (default: 'solid')
 * - href: string - If provided, renders as a Next.js Link
 * - ...rest: any - Other button props (e.g., onClick)
 */
const Button = ({
    children,
    disabled = false,
    isLoading = false,
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
        'bg-[rgba(0,0,0,.12)] pointer-events-none text-[rgba(0,0,0,.26)] border border-transparent dark:bg-darkDivider dark:text-darkText';

    // Loading state styles (distinct background, e.g., gray with opacity)
    const loadingStyles =
        'bg-[rgba(0,0,0,.08)] pointer-events-none text-[rgba(0,0,0,.26)] border border-transparent';

    // Compute className based on state
    let appliedStyle = variantStyles[variant] || variantStyles.solid;
    if (disabled) {
        appliedStyle = disabledStyles;
    }
    if (isLoading) {
        appliedStyle = loadingStyles;
    }

    const computedClassName = [baseStyles, appliedStyle, className].join(' ');

    // Simple loader spinner
    const Loader = () => (
        <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
    );

    if (href && !disabled && !isLoading) {
        // Render as Next.js Link
        return (
            <Link href={href} className={computedClassName} {...rest}>
                {children}
            </Link>
        );
    }

    // Render as button
    return (
        <button className={computedClassName} disabled={disabled || isLoading} {...rest}>
            {isLoading ? <Loader /> : children}
        </button>
    );
};

export default Button;
