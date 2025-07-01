import React from 'react';
import { Moon } from 'react-feather';

const DarkModeBtn = () => {
    return (
        <button
            type="button"
            data-ripple-dark="true"
            className="min-h-10 min-w-10 flex items-center justify-center rounded-lg ml-2.5 ripple"
        >
            <Moon />
        </button>
    );
};

export default DarkModeBtn;
