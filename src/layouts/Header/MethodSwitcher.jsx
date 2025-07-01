'use client';

import Menu from '@/components/Menu';
import METHODS from '@/constants/methods';
import useLayoutStore from '@/stores/useLayoutStore';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';
import { ChevronDown } from 'react-feather';

const ConfirmMethodModal = dynamic(() => import('./ConfirmMethodModal'));

const MethodSwitcher = () => {
    const [isOpenConfirmModal, setOpenConfirmModal] = useState(false);
    const chosenMethod = useLayoutStore(state => state.chosenMethod);
    const newChosenMethod = useRef();

    // Default to first method if none chosen
    const currentMethod = METHODS.find(m => m.key === chosenMethod) || METHODS[0];

    const handleChooseMethod = method => {
        newChosenMethod.current = method;
        setOpenConfirmModal(true);
    };

    return (
        <>
            <Menu
                animation="fade"
                closeOnClick
                anchor={
                    <div className="h-11 border border-solid border-[#dbdbdb] px-4 w-[200px] flex items-center justify-between rounded-md cursor-pointer">
                        <div className="flex-1 flex items-center">
                            {currentMethod.icon}
                            <span className="ml-3.5">{currentMethod.label}</span>
                        </div>
                        <ChevronDown size={12} />
                    </div>
                }
            >
                <div className="absolute shadow-menu left-0 top-0 right-0 bg-white py-2 rounded-md">
                    <ul>
                        {METHODS.map(method => (
                            <li
                                key={method.key}
                                role="button"
                                tabIndex={0}
                                className={clsx(
                                    'cursor-pointer flex items-center min-h-12 px-4 transition-colors duration-300',
                                    chosenMethod === method.key
                                        ? 'text-white bg-primary-light'
                                        : 'ripple hover:bg-[rgba(0,0,0,0.04)]'
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
