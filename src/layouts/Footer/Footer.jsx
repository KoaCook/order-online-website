import React from 'react';
import { Globe } from 'react-feather';

const Footer = () => {
    return (
        <div className="hidden md:block border-t border-solid border-[#e8e8e8] dark:border-[#292929] pb-3">
            <div className="max-w-xl mx-auto px-3 py-4 flex items-center justify-center flex-col">
                {/* <div className="text-red-600 text-base font-semibold mb-4">● Đang đóng cửa</div> */}
                <div className="flex text-sm sm:text-base">
                    <div className="flex items-center dark:text-white mr-4">
                        <Globe size={16} className="mr-1.5" />{' '}
                        <a
                            href="https://koacook.com"
                            target="_blank"
                            className="font-semibold hover:text-primary"
                        >
                            koacook.com
                        </a>
                    </div>
                    <div className="flex items-center dark:text-white">
                        <Globe size={16} className="mr-1.5" />{' '}
                        <a
                            href="https://jameskaois.com"
                            target="_blank"
                            className="font-semibold hover:text-primary"
                        >
                            jameskaois.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
