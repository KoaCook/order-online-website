import useLayoutStore from '@/stores/useLayoutStore';
import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import { X } from 'react-feather';
import LanguageSwitcher from '../Header/LanguageSwitcher';
import DarkModeBtn from '../Header/DarkModeBtn';
import TabSwitcher from './TabSwitcher';
import dynamic from 'next/dynamic';

const DeliveryMethod = dynamic(() => import('./DeliveryMethod'));
const DiningMethod = dynamic(() => import('./DiningMethod'));
const ReservationMethod = dynamic(() => import('./ReservationMethod'));

const ChooseMethodModal = () => {
    const [isVisible, setIsVisible] = useState(false);
    const closeMethodModal = useLayoutStore(state => state.closeMethodModal);
    const isOpenMethodModal = useLayoutStore(state => state.isOpenMethodModal);
    const modalRef = useRef();

    const tabs = ['Giao hàng', 'Tự đến lấy', 'Đặt chỗ'];
    const [selectedTab, setSelectedTab] = useState(0);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => {
            closeMethodModal();
        }, [300]);
    };

    useEffect(() => {
        if (isOpenMethodModal) {
            // Trigger initial animation
            setTimeout(() => {
                setIsVisible(true);
            }, 0); // Delay to ensure modal is mounted before animation
        }
    }, [isOpenMethodModal]);

    useEffect(() => {
        const handleClickOutside = event => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                handleClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    if (!isOpenMethodModal) return null;

    return (
        <div className="fixed top-0 right-0 bottom-0 left-0 z-[100] flex items-center justify-center">
            <div
                className={clsx(
                    'absolute top-0 left-0 w-full h-full bg-[rgba(33,33,33,0.46)] -z-10 transition-all duration-300 ease-ease ',
                    isVisible && 'opacity-100',
                    !isVisible && 'opacity-0'
                )}
            ></div>
            <div
                className={clsx(
                    'relative z-10 w-full max-w-[960px] max-h-[90%] m-6 shadow-product-details-modal bg-paper rounded-md transition-all ease-ease duration-300 overflow-y-scroll',
                    isVisible && 'opacity-100 scale-100',
                    !isVisible && 'opacity-0 scale-75'
                )}
                ref={modalRef}
            >
                <div className="flex items-center justify-between pl-[-10px] pr-2.5 pt-1">
                    <div className="flex items-center">
                        <LanguageSwitcher />
                        <DarkModeBtn />
                    </div>
                    <button
                        onClick={handleClose}
                        className="w-6 h-6 flex items-center justify-center rounded-full bg-[#bcbdbe]"
                    >
                        <X size={16} className="text-paper" />
                    </button>
                </div>
                <div className="text-xl mt-1 ml-5 font-semibold mb-2">Đặt hàng/ Đặt chỗ online</div>
                <TabSwitcher tabs={tabs} selected={selectedTab} onTabChange={setSelectedTab} />
                <div>
                    {selectedTab === 0 && <DeliveryMethod />}
                    {selectedTab === 1 && <DiningMethod />}
                    {selectedTab === 2 && <ReservationMethod />}
                </div>
            </div>
        </div>
    );
};

export default ChooseMethodModal;
