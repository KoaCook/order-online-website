'use client';

import { GroupIcon, PhoneIcon, UserIcon } from '@/components/Icons';
import StyledTimePicker from '@/components/StyledTimePicker';
import useCustomerDetails from '@/stores/useCustomerDetails';
import DatePicker from 'react-datepicker';
import { Calendar } from 'react-feather';

const CustomerDetails = () => {
    const { name, phone, note, numOfCustomers, selectedDate, selectedTime, setField } =
        useCustomerDetails();

    return (
        <>
            <div className="mt-6">
                <div className="text-base uppercase mb-5">
                    Thông tin khách hàng <span className="text-red-500">*</span>
                </div>
                <div className="flex mb-4">
                    <div className="px-3 border border-solid border-[#dbdbdb] flex items-center h-10 rounded-lg mr-3 flex-1 overflow-hidden">
                        <span className="text-primary mr-2.5 w-6 h-6 flex items-center">
                            <UserIcon />
                        </span>
                        <input
                            type="text"
                            className="py-2 w-full flex-1 caret-primary text-[15px] outline-none"
                            placeholder="Họ và tên"
                            value={name}
                            onChange={e => setField('name', e.target.value)}
                        />
                    </div>
                    <div className="px-3 border border-solid border-[#dbdbdb] flex items-center h-10 rounded-lg flex-1 overflow-hidden">
                        <span className="text-primary mr-2.5 w-6 h-6 flex items-center">
                            <PhoneIcon />
                        </span>
                        <input
                            type="text"
                            className="py-2 w-full flex-1 caret-primary text-[15px] outline-none"
                            placeholder="Số điện thoại"
                            value={phone}
                            onChange={e => setField('phone', e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <div className="text-base uppercase mb-5">Thông tin đặt chỗ</div>
                <div className="flex mb-4">
                    <div className="flex-1">
                        <div className="font-semibold text-base mb-2">Số khách</div>
                        <div className="px-3 border border-solid border-[#dbdbdb] flex items-center h-10 rounded-lg mr-3 overflow-hidden">
                            <span className="text-primary mr-2.5 w-6 h-6 flex items-center">
                                <GroupIcon />
                            </span>
                            <input
                                type="number"
                                min="0"
                                max="50"
                                className="py-2 w-full flex-1 caret-primary text-[15px] outline-none"
                                value={numOfCustomers}
                                onChange={e => setField('numOfCustomers', Number(e.target.value))}
                            />
                        </div>
                    </div>
                    <div className="flex-1 mr-3">
                        <div className="font-semibold text-base mb-2">
                            Ngày đến <span className="text-red-500">*</span>
                        </div>
                        <div className="px-3 border border-solid border-[#dbdbdb] flex items-center h-10 rounded-lg overflow-hidden">
                            <span className="text-primary mr-2.5 w-6 h-6 flex items-center">
                                <Calendar />
                            </span>
                            <DatePicker
                                closeOnScroll={e => e.target === document}
                                selected={selectedDate ? new Date(selectedDate) : null}
                                onChange={date =>
                                    setField('selectedDate', date ? date.toISOString() : '')
                                }
                                className="w-full outline-none select-none text-[15px]"
                                dateFormat="dd/MM/yyyy"
                                minDate={new Date()}
                                preventOpenOnFocus={true}
                                placeholderText="Chọn ngày đặt chỗ"
                            />
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="font-semibold text-base mb-2">
                            Giờ đến <span className="text-red-500">*</span>
                        </div>
                        <StyledTimePicker
                            value={selectedTime}
                            className="h-[38px]"
                            onChange={value => setField('selectedTime', value)}
                        />
                    </div>
                </div>
                <div>
                    <div className="font-semibold text-base mb-2">Ghi chú</div>
                    <textarea
                        className="border border-solid border-[#dbdbdb] pt-2 px-3 text-[15px] rounded-md resize-none w-full outline-none"
                        rows={4}
                        placeholder="Ghi chú"
                        value={note}
                        onChange={e => setField('note', e.target.value)}
                    ></textarea>
                </div>
            </div>
        </>
    );
};

export default CustomerDetails;
