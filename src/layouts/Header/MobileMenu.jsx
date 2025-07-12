'use client';

import { useState } from 'react';
import { MapPin, Menu, X } from 'react-feather';
import Drawer from 'react-modern-drawer';
import MethodSwitcher from './MethodSwitcher';
import LanguageSwitcher from './LanguageSwitcher';
import useBreakpoint from '@/hooks/useBreakpoint';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { width } = useBreakpoint();

    const toggleDrawer = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <>
            <button
                type="button"
                onClick={toggleDrawer}
                className="min-h-10 min-w-10 flex items-center justify-center rounded-lg ml-2.5 ripple dark:text-white md:hidden"
            >
                <Menu />
            </button>

            {width < 960 && (
                <Drawer
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction="right"
                    className="!w-screen sm:!w-drawer"
                >
                    <div className="relative flex flex-col h-full overflow-y-scroll dark:bg-lightDark dark:text-white">
                        <button
                            onClick={toggleDrawer}
                            className="absolute top-4 right-3 w-6 h-6 flex items-center justify-center rounded-full bg-[#bcbdbe] dark:bg-transparent"
                        >
                            <X size={16} className="text-paper" />
                        </button>
                        <div className="px-5 text-xl font-semibold">
                            <div className="py-3.5 border-b border-solid border-[rgba(0,0,0,.12)] dark:text-white dark:border-darkDivider">
                                Menu
                            </div>
                        </div>
                        <div className="p-5 h-full flex flex-col">
                            <div className="mb-[22px]">
                                <div className="font-semibold">Chi nhánh</div>
                                <div className="mt-2 w-full rounded-md min-h-10 text-[#212121] bg-[#e8e8e8] border border-solid border-[#dbdbdb] flex items-center px-2.5">
                                    <MapPin size={20} />
                                    <div className="text-[15px] ml-4 flex-1 py-2">
                                        Tầng 2 tòa nhà N03T1 - Khu Ngoại Giao Đoàn, Ngoaij Giao
                                        DDoan, Thị trấn Cát Tiên, Huyện Cát Tiên, Lâm Đồng
                                    </div>
                                </div>
                            </div>
                            <div className="mb-[22px]">
                                <div className="font-semibold mb-2">Hình thức</div>
                                <MethodSwitcher noResponsive className="w-full" />
                            </div>
                            <div className="mt-auto mb-14 flex justify-center">
                                <LanguageSwitcher noResponsive showLabel />
                            </div>
                        </div>
                    </div>
                </Drawer>
            )}
        </>
    );
};

export default MobileMenu;
