import Image from 'next/image';
import React from 'react';
import { FileText, Moon, ShoppingCart } from 'react-feather';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-fade">
            <div className="max-w-xl mx-auto px-3 py-1.5 h-[72px] w-full flex items-center justify-between">
                <Image
                    src="/logo_mixue.webp"
                    alt="Logo"
                    width={182}
                    height={60}
                    className="!h-full !w-auto"
                />
                <div className="flex items-center">
                    <button
                        type="button"
                        data-ripple-dark="true"
                        className="h-10 min-w-10 flex items-center justify-center rounded-lg ml-2.5"
                    >
                        <Moon />
                    </button>
                    <button
                        type="button"
                        data-ripple-dark="true"
                        className="h-10 min-w-10 flex items-center justify-center rounded-lg ml-2.5"
                    >
                        <FileText />
                    </button>
                    <button
                        type="button"
                        data-ripple-dark="true"
                        className="h-10 min-w-10 flex items-center justify-center rounded-lg ml-2.5"
                    >
                        <ShoppingCart />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
