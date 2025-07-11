import React from 'react';
import { Globe } from 'react-feather';

const Footer = () => {
    return (
        <div className="hidden md:block border-t border-solid border-[#e8e8e8] dark:border-[#292929] pb-3">
            <div className="max-w-xl mx-auto px-3 py-4 flex items-center justify-center flex-col">
                <div className="text-red-600 text-base font-semibold mb-4">● Đang đóng cửa</div>
                <div className="text-base flex items-center dark:text-white">
                    <Globe size={16} className="mr-1.5" /> jameskaois.com
                </div>
            </div>
        </div>
    );
};

export default Footer;
