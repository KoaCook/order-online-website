import React from 'react';
import { ChevronDown } from 'react-feather';

/**
 * StyledSelect
 * @param {Object} props
 * @param {Array<{value: string|number, label: string}>} props.options
 * @param {string|number} props.value
 * @param {function} props.onChange
 * @param {string} [props.placeholder]
 * @param {string} [props.className]
 * @param {boolean} [props.disabled]
 */
const StyledSelect = ({
    options,
    value,
    onChange,
    placeholder = 'Chọn...',
    className = '',
    disabled = false,
    ...rest
}) => {
    // Disabled styles
    const disabledContainer =
        'bg-gray-100 cursor-not-allowed opacity-80 dark:bg-[#23272f] dark:opacity-60 dark:border-[#292929]';
    const disabledSelect =
        'text-gray-400 dark:text-[#777] bg-gray-100 dark:bg-[#23272f] cursor-not-allowed';

    return (
        <div
            className={`relative flex items-center px-2.5 py-3 border rounded-lg transition group ${
                disabled
                    ? disabledContainer
                    : 'bg-white cursor-pointer dark:bg-lightDark dark:border-[#292929]'
            } ${className}`}
        >
            <select
                value={value}
                onChange={e => onChange(e.target.value)}
                className={`appearance-none bg-transparent w-full pr-8 text-sm text-gray-900 dark:text-white focus:outline-none ${
                    disabled ? disabledSelect : ''
                }`}
                disabled={disabled}
                {...rest}
            >
                {placeholder && (
                    <option value="" disabled hidden>
                        {placeholder}
                    </option>
                )}
                {options.map(opt => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
            <span
                className={`absolute right-4 pointer-events-none ${
                    disabled ? 'text-gray-300' : 'text-gray-400'
                }`}
            >
                <ChevronDown size={18} />
            </span>
        </div>
    );
};

export default StyledSelect;
