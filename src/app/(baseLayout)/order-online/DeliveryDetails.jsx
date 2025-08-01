'use client';

import StyledSelect from '@/components/StyledSelect';
import useLayoutStore from '@/stores/useLayoutStore';
import useCustomerDetails from '@/stores/useCustomerDetails';
import { useCallback } from 'react';

import dynamic from 'next/dynamic';

const DatePicker = dynamic(() => import('react-datepicker'));
const StyledTimePicker = dynamic(() => import('@/components/StyledTimePicker'));

const paymentMethods = [
    {
        value: 'cash',
        label: 'Tiền mặt',
        icon: '/cash.svg',
    },
    {
        value: 'transfer',
        label: 'Chuyển khoản',
        icon: '/bank.png',
    },
];

const deliveryOptions = [
    { label: 'Giao ngay', value: 'immediately' },
    { label: 'Giao vào lúc', value: 'schedule-at' },
];

const pickupOptions = [
    { label: 'Lấy ngay', value: 'immediately' },
    { label: 'Lấy vào lúc', value: 'schedule-at' },
];

const DeliveryDetails = () => {
    const chosenMethod = useLayoutStore(state => state.chosenMethod);
    const setChosenMethod = useLayoutStore(state => state.setChosenMethod);

    // Zustand store for customer details
    const { schedule, selectedDate, selectedTime, paymentMethod, note, setField } =
        useCustomerDetails();

    // Handlers
    const handleScheduleChange = useCallback(
        value => {
            if (value === 'immediately') {
                setField('selectedDate', '');
                setField('selectedTime', '');
            }
            setField('schedule', value);
        },
        [setField],
    );

    return (
        <>
            <div className="text-sm sm:text-base uppercase mb-5">Thông tin đặt hàng</div>
            <div className="mb-4">
                <div className="flex-1 mb-[22px]">
                    <div className="font-semibold text-sm sm:text-base mb-2">
                        Hình thức giao nhận
                    </div>
                    <StyledSelect
                        options={[
                            { label: 'Giao tận nơi', value: 'delivery' },
                            { label: 'Tự đến lấy', value: 'pickup' },
                        ]}
                        value={chosenMethod}
                        onChange={setChosenMethod}
                    />
                </div>
                <div className="flex gap-3 mb-[22px]">
                    <div className="flex-1">
                        <StyledSelect
                            options={chosenMethod === 'delivery' ? deliveryOptions : pickupOptions}
                            value={schedule}
                            onChange={handleScheduleChange}
                        />
                    </div>
                    {schedule === 'schedule-at' && (
                        <>
                            <div className="flex-1 px-3 border border-solid border-[#dbdbdb] flex items-center h-[46px] rounded-lg overflow-hidden">
                                <DatePicker
                                    closeOnScroll={e => e.target === document}
                                    selected={selectedDate ? new Date(selectedDate) : new Date()}
                                    onChange={value => setField('selectedDate', value)}
                                    className="w-full h-full outline-none select-none text-[15px]"
                                    dateFormat="dd/MM/yyyy"
                                    minDate={new Date()}
                                    preventOpenOnFocus={true}
                                    placeholderText="Chọn ngày đặt chỗ"
                                />
                            </div>
                            <StyledTimePicker
                                value={selectedTime}
                                onChange={value => setField('selectedTime', value)}
                            />
                        </>
                    )}
                </div>
            </div>
            <div>
                <div className="font-semibold text-base mb-2">Ghi chú đơn hàng</div>
                <textarea
                    className="border border-solid border-[#dbdbdb] dark:border-[#292929] dark:bg-[#1e1e1e] caret-primary pt-2 px-3 text-[15px] rounded-md resize-none w-full outline-none"
                    rows={4}
                    placeholder="Ghi chú đơn hàng"
                    value={note}
                    onChange={e => setField('note', e.target.value)}
                ></textarea>
            </div>
            <div className="text-base uppercase mb-3 mt-5">HÌNH THỨC THANH TOÁN</div>
            <div className="flex gap-4">
                {paymentMethods.map(method => {
                    const isActive = paymentMethod === method.value;
                    return (
                        <button
                            key={method.value}
                            type="button"
                            onClick={() => setField('paymentMethod', method.value)}
                            className={`relative flex items-center flex-1 border rounded-lg px-4 py-3 transition dark:bg-[#3a3b3c] dark:border-transparent
            ${
                isActive
                    ? 'border-primary dark:border-primary bg-primary-50 shadow'
                    : 'border-gray-200 bg-white'
            }
            hover:border-primary-400 focus:outline-none`}
                            style={{ minWidth: 0 }}
                        >
                            {/* Check icon in top right when active */}
                            {isActive && (
                                <span className="absolute top-2 right-2 text-primary">
                                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                                        <circle cx="10" cy="10" r="10" className="fill-primary" />
                                        <path
                                            d="M6 10.5l3 3 5-5"
                                            stroke="#fff"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                            )}
                            <span
                                className="mr-3 w-8 h-8 bg-center bg-no-repeat bg-contain"
                                style={{ backgroundImage: `url(${method.icon})` }}
                            ></span>
                            <span className="text-base font-medium">{method.label}</span>
                        </button>
                    );
                })}
                <div className="flex-1 hidden xl:block"></div>
            </div>
        </>
    );
};

export default DeliveryDetails;
