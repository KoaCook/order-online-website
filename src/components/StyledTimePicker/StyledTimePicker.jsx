import { useEffect, useMemo } from 'react';

const getNearestInterval = (date, interval) => {
    const minutes = date.getMinutes();
    const remainder = minutes % interval;
    if (remainder === 0) {
        return date;
    }
    // Round up to the next interval
    const diff = interval - remainder;
    const rounded = new Date(date.getTime() + diff * 60000);
    rounded.setSeconds(0, 0);
    return rounded;
};

const generateTimeOptions = (interval = 15, fromTime = null) => {
    const options = [];
    // Start at 10:00 (10am), end at 21:00 (9pm)
    let startHour = 10;
    let startMinute = 0;

    if (fromTime) {
        // Only allow times after fromTime (rounded up to nearest interval)
        startHour = fromTime.getHours();
        startMinute = fromTime.getMinutes();
    }

    for (let h = startHour; h <= 21; h++) {
        for (let m = h === startHour ? startMinute : 0; m < 60; m += interval) {
            // If it's the last hour (21), only allow 21:00 (not 21:15, etc.)
            if (h === 21 && m > 0) continue;
            // If before fromTime, skip
            if (fromTime) {
                const optionDate = new Date();
                optionDate.setHours(h, m, 0, 0);
                if (optionDate < fromTime) continue;
            }
            const hour = h.toString().padStart(2, '0');
            const minute = m.toString().padStart(2, '0');
            options.push({
                label: `${hour}:${minute}`,
                value: `${hour}:${minute}`,
            });
        }
    }
    return options;
};

const StyledTimePicker = ({
    value,
    onChange,
    interval = 15,
    placeholder = 'Chọn giờ...',
    className = '',
    disabled = false,
    ...rest
}) => {
    // Calculate the nearest available interval from now, but not before 10:00
    const now = new Date();
    let fromTime = new Date(now);
    fromTime.setSeconds(0, 0);
    if (fromTime.getHours() < 10) {
        fromTime.setHours(10, 0, 0, 0);
    } else if (
        fromTime.getHours() > 21 ||
        (fromTime.getHours() === 21 && fromTime.getMinutes() > 0)
    ) {
        // After 21:00, no options available
        fromTime.setHours(21, 0, 0, 0);
    } else {
        fromTime = getNearestInterval(fromTime, interval);
        // If after 21:00, clamp to 21:00
        if (fromTime.getHours() > 21 || (fromTime.getHours() === 21 && fromTime.getMinutes() > 0)) {
            fromTime.setHours(21, 0, 0, 0);
        }
    }

    const options = useMemo(() => generateTimeOptions(interval, fromTime), [interval, fromTime]);

    // Set default value to nearest available interval if not set
    useEffect(() => {
        if (!value && options.length > 0) {
            onChange(options[0].value);
        }
        // eslint-disable-next-line
    }, [options]);

    // Disabled styles
    const disabledContainer = 'bg-gray-100 cursor-not-allowed opacity-80';
    const disabledSelect = 'text-gray-400 bg-gray-100 cursor-not-allowed';

    return (
        <div
            className={`relative flex items-center px-2.5 py-3 border rounded-lg transition group ${
                disabled ? disabledContainer : 'bg-white cursor-pointer'
            } ${className}`}
        >
            <select
                value={value || (options.length > 0 ? options[0].value : '')}
                onChange={e => onChange(e.target.value)}
                className={`appearance-none bg-transparent w-full pr-8 text-sm text-gray-900 focus:outline-none ${
                    disabled ? disabledSelect : ''
                }`}
                disabled={disabled || options.length === 0}
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
                {/* You can use a clock icon here if you have one, or leave blank */}
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    <path
                        d="M12 7v5l3 3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            </span>
        </div>
    );
};

export default StyledTimePicker;
