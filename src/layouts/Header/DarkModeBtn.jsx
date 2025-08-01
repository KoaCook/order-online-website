'use client';

import routes from '@/config/routes';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'react-feather';

const DarkModeBtn = () => {
    const pathname = usePathname();
    const [darkMode, setDarkMode] = useState(() => {
        // Check localStorage or system preference
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem('theme');
            if (stored) return stored === 'dark';
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return false;
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode(prev => !prev);

    return (
        <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={toggleDarkMode}
            className={clsx(
                'min-h-10 min-w-10 items-center justify-center rounded-lg ml-2.5 ripple',
                pathname !== routes.HOME ? 'hidden md:flex' : 'flex',
            )}
        >
            {darkMode ? (
                <Sun className="text-white" />
            ) : (
                <Moon className="text-gray-700 dark:text-gray-200" />
            )}
        </button>
    );
};

export default DarkModeBtn;
