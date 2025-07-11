'use client';

import orderApi from '@/apis/orderApi';
import ErrorAlert from '@/components/ErrorAlert';
import METHODS from '@/constants/methods';
import statuses from '@/constants/statuses';
import formatDateTime from '@/utils/formatDateTime';
import formatPrice from '@/utils/formatPrice';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FileText, X } from 'react-feather';
import Drawer from 'react-modern-drawer';
import PhoneInput from './PhoneInput';
import routes from '@/config/routes';

const OrderHistory = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [orders, setOrders] = useState();
    const [error, setError] = useState(false);
    const pathname = usePathname();

    const toggleDrawer = () => {
        setIsOpen(prevState => !prevState);
    };

    const handleGetOrdersHistory = async phone => {
        try {
            const data = await orderApi.getOrdersHistory(phone);
            setOrders(data);
            setError(false);
        } catch (error) {
            setError(true);
        }
    };

    const getOrderTypeLabel = orderType => {
        const method = METHODS.find(m => m.key === orderType);
        return method ? method.label : orderType;
    };

    const getStatusLabel = status => {
        const found = statuses.find(s => s.key === status);
        return found ? found.label : status;
    };

    return (
        <>
            <button
                onClick={toggleDrawer}
                type="button"
                data-ripple-dark="true"
                className={clsx(
                    'min-h-9 lg:min-h-10 min-w-9 lg:min-w-10 items-center justify-center rounded-lg ml-2.5 ripple px-3 dark:text-white',
                    pathname !== routes.HOME ? 'hidden md:flex' : 'flex',
                )}
            >
                <FileText />
                <span className="ml-1.5 hidden lg:inline-block">Tra cứu đơn hàng</span>
            </button>

            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction="right"
                className="!w-screen sm:!w-drawer"
            >
                <div className="relative flex flex-col h-full overflow-y-scroll dark:bg-lightDark">
                    <button
                        onClick={toggleDrawer}
                        className="absolute top-4 right-3 w-6 h-6 flex items-center justify-center rounded-full bg-[#bcbdbe] dark:bg-transparent"
                    >
                        <X size={16} className="text-paper" />
                    </button>
                    <div className="px-5 text-xl font-semibold">
                        <div className="py-3.5 border-b border-solid border-[rgba(0,0,0,.12)] dark:text-white dark:border-darkDivider">
                            Lịch sử đơn hàng/ đặt chỗ
                        </div>
                    </div>
                    <div className="flex-1">
                        <PhoneInput getData={handleGetOrdersHistory} />

                        {orders === undefined && !error && <BlankOrders />}
                        {orders !== undefined && (
                            <div className="px-5 mt-5">
                                {orders.map(item => (
                                    <div
                                        key={item.id}
                                        className="pt-2.5 pr-3 pb-2.5 pl-2.5 border border-[rgb(219,219,219)] dark:border-darkDivider rounded-md text-base mb-4"
                                    >
                                        <div className="flex justify-between mb-2">
                                            <div className="text-[rgba(0,0,0,0.6)] dark:text-white">
                                                {formatDateTime(item.created_at)}
                                            </div>
                                            <div className="text-primary">
                                                {getStatusLabel(item.status)}
                                            </div>
                                        </div>
                                        <div className="mb-2">
                                            {item.order_items.map(menu_item => (
                                                <div key={menu_item.id} className="dark:text-white">
                                                    {menu_item.quantity}x {menu_item.name}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mb-2 text-primary">
                                            {formatPrice(item.total_price)} đ
                                        </div>
                                        <div className="font-bold dark:text-white dark:font-semibold">
                                            {getOrderTypeLabel(item.order_type)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {error && <ErrorAlert showReload={false} />}
                    </div>
                </div>
            </Drawer>
        </>
    );
};

const BlankOrders = () => (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center flex flex-col items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="115" viewBox="0 0 79.609 92">
            <g id="_1648123" data-name="1648123" transform="translate(-0.465 0.001)">
                <path
                    id="Path_32556"
                    data-name="Path 32556"
                    d="M47.879,83.764l-23.6.13a6.615,6.615,0,0,1-6.646-6.582l-.283-59.048a6.6,6.6,0,0,1,.406-2.318,6.626,6.626,0,0,0-4.33,6.243l.283,59.048a6.614,6.614,0,0,0,6.646,6.582l27.7-.153a21.231,21.231,0,0,1-.2-2.885C47.853,84.44,47.863,84.1,47.879,83.764Zm0,0"
                    transform="translate(-10.659 -13.311)"
                    fill="#f3f3f3"
                />
                <g id="Group_30392" data-name="Group 30392" transform="translate(0.465 -0.001)">
                    <path
                        id="Path_32557"
                        data-name="Path 32557"
                        d="M9.851,76.807H9.9l28.242-.16-.014-2.339-28.24.16a6.767,6.767,0,0,1-6.8-6.732L2.8,9.27a6.765,6.765,0,0,1,6.733-6.8l27.057-.13.053,10.985a9.1,9.1,0,0,0,9.1,9.062H45.8l10.986-.053.152,27.331,2.339-.013-.156-28.206,0-.336a1.17,1.17,0,0,0-.347-.826L38.624.376a1.172,1.172,0,0,0-.711-.333L37.493,0c-.039,0-.078,0-.117-.005L9.527.133A9.115,9.115,0,0,0,.465,9.281l.28,58.463a9.118,9.118,0,0,0,9.106,9.062ZM45.787,20.049h-.034a6.767,6.767,0,0,1-6.765-6.733l-.045-9.335L55.156,20Zm0,0"
                        transform="translate(-0.465 0.001)"
                        fill="#d5d5d5"
                    />
                    <path
                        id="Path_32558"
                        data-name="Path 32558"
                        d="M140.6,221.52a1.17,1.17,0,0,0,0,2.339h3.967a1.17,1.17,0,0,0,0-2.339Zm0,0"
                        transform="translate(-112.343 -178.336)"
                        fill="#d5d5d5"
                    />
                    <path
                        id="Path_32559"
                        data-name="Path 32559"
                        d="M96.268,171.807a1.169,1.169,0,0,0-1.17-1.17H62.166a1.17,1.17,0,0,0,0,2.339H95.1A1.169,1.169,0,0,0,96.268,171.807Zm0,0"
                        transform="translate(-49.196 -137.372)"
                        fill="#d5d5d5"
                    />
                    <path
                        id="Path_32560"
                        data-name="Path 32560"
                        d="M62.166,221.52a1.17,1.17,0,0,0,0,2.339H72.431a1.17,1.17,0,1,0,0-2.339Zm0,0"
                        transform="translate(-49.196 -178.336)"
                        fill="#d5d5d5"
                    />
                </g>
                <path
                    id="Path_32561"
                    data-name="Path 32561"
                    d="M217.407,284.529l7.3,7.3a1.17,1.17,0,0,0,1.654-1.654l-7.336-7.337a20.705,20.705,0,1,0-1.621,1.687ZM185.022,269.4a18.325,18.325,0,1,1,18.325,18.325A18.325,18.325,0,0,1,185.022,269.4Zm0,0"
                    transform="translate(-146.633 -200.177)"
                    fill="#e93940"
                />
            </g>
        </svg>
        <span className="text-base text-center text-[rgba(0,0,0,.6)] dark:text-[hsla(0,0%,100%,.7)] font-light mt-5">
            Nhập số điện thoại để tìm kiếm đơn hàng
        </span>
    </div>
);

export default OrderHistory;
