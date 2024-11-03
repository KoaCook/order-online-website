'use client';

import Menu from '@/components/Menu';
import clsx from 'clsx';
import Image from 'next/image';
import { ChevronDown } from 'react-feather';

const LanguageSwitcher = () => {
    return (
        <div className="ml-5">
            <Menu
                closeOnClick
                animation="fade"
                anchor={
                    <button className="flex items-center justify-end min-h-12 min-w-14 relative">
                        <Image
                            src="/vietnam.svg"
                            alt="Vietnam Icon"
                            width={34}
                            height={24}
                            className="mr-2.5"
                        />
                        <ChevronDown size={14} />
                    </button>
                }
            >
                <div className="absolute shadow-menu left-0 top-full bg-white py-2 rounded-md min-w-max">
                    <ul>
                        <li
                            role="button"
                            tabIndex={0}
                            className={clsx(
                                'cursor-pointer flex items-center min-h-12 px-4 transition-colors duration-300',
                                true && 'text-white bg-primary-light'
                            )}
                        >
                            <Image src="/vietnam.svg" alt="Vietnam" width={34} height={24} />
                            <div className="ml-2 text-sm">Tiếng Việt</div>
                        </li>
                        <li
                            role="button"
                            tabIndex={0}
                            className={clsx(
                                'cursor-pointer flex items-center min-h-12 px-4 transition-colors ',
                                false && 'text-primary bg-primary-light',
                                true && 'ripple hover:bg-[rgba(0,0,0,0.04)]'
                            )}
                        >
                            <Image src="/english.svg" alt="English" width={34} height={24} />
                            <div className="ml-2 text-sm">Tiếng Anh</div>
                        </li>
                    </ul>
                </div>
            </Menu>
        </div>
    );
};

export default LanguageSwitcher;
