'use client';

import Menu from '@/components/Menu';
import METHODS from '@/constants/methods';
import useLayoutStore from '@/stores/useLayoutStore';
import clsx from 'clsx';
import { useRef, useState } from 'react';
import { ChevronDown } from 'react-feather';
import ConfirmMethodModal from './ConfirmMethodModal';

const MethodSwitcher = ({ noResponsive = false, className }) => {
    const [isOpenConfirmModal, setOpenConfirmModal] = useState(false);
    const chosenMethod = useLayoutStore(state => state.chosenMethod);
    const setChosenMethod = useLayoutStore(state => state.setChosenMethod);
    const newChosenMethod = useRef();

    // Default to first method if none chosen
    const currentMethod = METHODS.find(m => m.key === chosenMethod) || METHODS[0];

    const handleChooseMethod = method => {
        if (!method || !method.key) return;

        // Define what constitutes a direct switch (no confirmation needed)
        const isDirectSwitch =
            (method.key === 'delivery' && chosenMethod === 'pickup') ||
            (method.key === 'pickup' && chosenMethod === 'delivery');

        if (isDirectSwitch) {
            setChosenMethod(method.key);
            return;
        }

        // For all other cases, require confirmation
        newChosenMethod.current = method;
        setOpenConfirmModal(true);
    };

    return (
        <>
            <Menu
                animation="fade"
                closeOnClick
                anchor={
                    <div
                        className={clsx(
                            'h-11 border border-solid border-[#dbdbdb] dark:border-[#292929] dark:bg-lightDark px-4 w-[200px] items-center justify-between rounded-md cursor-pointer dark:text-white',
                            noResponsive ? 'flex' : 'hidden md:flex',
                            className,
                        )}
                    >
                        <div className="flex-1 flex items-center">
                            {currentMethod.icon}
                            <span className="ml-3.5">{currentMethod.label}</span>
                        </div>
                        <ChevronDown size={12} className="dark:text-darkGray" />
                    </div>
                }
            >
                <div className="absolute shadow-menu left-0 top-0 right-0 bg-white dark:bg-lightDark py-2 rounded-md">
                    <ul>
                        {METHODS.map(method => (
                            <li
                                key={method.key}
                                role="button"
                                tabIndex={0}
                                className={clsx(
                                    'cursor-pointer flex items-center min-h-12 px-4 transition-colors duration-300',
                                    chosenMethod === method.key
                                        ? 'text-primary dark:bg-primary-dark-light bg-primary-light'
                                        : 'ripple dark:text-white hover:bg-[rgba(0,0,0,0.04)!important] dark:hover:bg-[rgba(255,255,255,0.08)!important]',
                                )}
                                onClick={
                                    chosenMethod !== method.key
                                        ? () => handleChooseMethod(method)
                                        : undefined
                                }
                            >
                                <div className="w-7">{method.icon}</div>
                                <div className="ml-2 text-sm">{method.label}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </Menu>
            {isOpenConfirmModal && (
                <ConfirmMethodModal
                    isOpenConfirmModal={isOpenConfirmModal}
                    closeConfirmModal={() => setOpenConfirmModal(false)}
                    method={newChosenMethod.current}
                />
            )}
        </>
    );
};

export default MethodSwitcher;
