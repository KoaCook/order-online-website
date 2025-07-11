'use client';

import { GroupIcon, PhoneIcon, UserIcon } from '@/components/Icons';
import StyledTimePicker from '@/components/StyledTimePicker';
import useCustomerDetails from '@/stores/useCustomerDetails';
import { forwardRef, useImperativeHandle } from 'react';
import DatePicker from 'react-datepicker';
import { Calendar } from 'react-feather';
import { Controller, useForm } from 'react-hook-form';

const CustomerDetails = forwardRef((props, ref) => {
    const { name, phone, note, numOfCustomers, selectedDate, selectedTime, setField } =
        useCustomerDetails();

    const {
        register,
        handleSubmit,
        control,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: name || '',
            phone: phone || '',
            note: note || '',
            numOfCustomers: numOfCustomers || '',
            selectedDate: selectedDate || '',
            selectedTime: selectedTime || '',
        },
        mode: 'onBlur',
    });

    // Expose submitForm to parent via ref
    useImperativeHandle(ref, () => ({
        submitForm: () =>
            new Promise(resolve => {
                handleSubmit(
                    data => resolve(data), // valid: return data
                    () => resolve(null), // invalid: return null
                )();
            }),
    }));

    // On submit, you can handle the data as needed
    const onSubmit = data => {
        // Do something with the data, e.g., send to backend
        // (not needed here, handled in parent)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="md:mt-6">
                <div className="text-sm sm:text-base uppercase mb-5">
                    Thông tin khách hàng <span className="text-red-500">*</span>
                </div>
                <div className="sm:flex mb-4">
                    <div className="flex-1 mb-[22px] sm:mb-0">
                        <div className="px-3 border border-solid border-[#dbdbdb] dark:border-[#292929] dark:bg-[#1e1e1e] flex items-center h-10 rounded-lg mr-3 overflow-hidden">
                            <span className="text-primary mr-2.5 w-6 h-6 flex items-center">
                                <UserIcon />
                            </span>
                            <input
                                type="text"
                                className="py-2 w-full flex-1 caret-primary text-[15px] outline-none bg-transparent"
                                placeholder="Họ và tên"
                                {...register('name', {
                                    required: 'Vui lòng nhập họ và tên',
                                    minLength: { value: 2, message: 'Tên quá ngắn' },
                                })}
                                onChange={e => {
                                    setField('name', e.target.value);
                                    setValue('name', e.target.value, { shouldValidate: true });
                                }}
                                value={name}
                            />
                        </div>
                        {errors.name && (
                            <span className="text-red-500 text-xs">{errors.name.message}</span>
                        )}
                    </div>
                    <div className="flex-1">
                        <div className="px-3 border border-solid border-[#dbdbdb] dark:border-[#292929] dark:bg-[#1e1e1e] flex items-center h-10 rounded-lg overflow-hidden">
                            <span className="text-primary mr-2.5 w-6 h-6 flex items-center">
                                <PhoneIcon />
                            </span>
                            <input
                                type="text"
                                className="py-2 w-full flex-1 caret-primary text-[15px] outline-none bg-transparent"
                                placeholder="Số điện thoại"
                                {...register('phone', {
                                    required: 'Vui lòng nhập số điện thoại',
                                    pattern: {
                                        value: /^[0-9]{9,12}$/,
                                        message: 'Số điện thoại không hợp lệ',
                                    },
                                })}
                                onChange={e => {
                                    setField('phone', e.target.value);
                                    setValue('phone', e.target.value, { shouldValidate: true });
                                }}
                                value={phone}
                            />
                        </div>
                        {errors.phone && (
                            <span className="text-red-500 text-xs">{errors.phone.message}</span>
                        )}
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <div className="text-sm sm:text-base uppercase mb-5">Thông tin đặt chỗ</div>
                <div className="sm:flex mb-4">
                    <div className="flex-1 mb-[22px] sm:mb-0">
                        <div className="font-semibold text-sm sm:text-base mb-2">Số khách</div>
                        <div className="px-3 border border-solid border-[#dbdbdb] dark:border-[#292929] dark:bg-[#1e1e1e] flex items-center h-10 rounded-lg sm:mr-3 overflow-hidden">
                            <span className="text-primary mr-2.5 w-6 h-6 flex items-center">
                                <GroupIcon />
                            </span>
                            <input
                                type="number"
                                min="1"
                                max="50"
                                className="py-2 w-full flex-1 caret-primary text-[15px] outline-none bg-transparent"
                                placeholder="Số khách"
                                {...register('numOfCustomers', {
                                    required: 'Vui lòng nhập số khách',
                                    min: { value: 1, message: 'Tối thiểu 1 khách' },
                                    max: { value: 50, message: 'Tối đa 50 khách' },
                                })}
                                onChange={e => {
                                    setField('numOfCustomers', Number(e.target.value));
                                    setValue('numOfCustomers', e.target.value, {
                                        shouldValidate: true,
                                    });
                                }}
                                value={numOfCustomers}
                            />
                        </div>
                        {errors.numOfCustomers && (
                            <span className="text-red-500 text-xs">
                                {errors.numOfCustomers.message}
                            </span>
                        )}
                    </div>
                    <div className="flex-1 mb-[22px] sm:mb-0 sm:mr-3">
                        <div className="font-semibold text-sm sm:text-base mb-2">
                            Ngày đến <span className="text-red-500">*</span>
                        </div>
                        <div className="px-3 border border-solid border-[#dbdbdb] dark:border-[#292929] dark:bg-[#1e1e1e] flex items-center h-10 rounded-lg overflow-hidden">
                            <span className="text-primary mr-2.5 w-6 h-6 flex items-center">
                                <Calendar />
                            </span>
                            <Controller
                                control={control}
                                name="selectedDate"
                                rules={{ required: 'Vui lòng chọn ngày đến' }}
                                render={({ field }) => (
                                    <DatePicker
                                        closeOnScroll={e => e.target === document}
                                        selected={selectedDate ? new Date(selectedDate) : null}
                                        onChange={date => {
                                            const iso = date ? date.toISOString() : '';
                                            setField('selectedDate', iso);
                                            field.onChange(iso);
                                        }}
                                        className="w-full outline-none select-none text-[15px] bg-transparent"
                                        dateFormat="dd/MM/yyyy"
                                        minDate={new Date()}
                                        preventOpenOnFocus={true}
                                        placeholderText="Chọn ngày đặt chỗ"
                                    />
                                )}
                            />
                        </div>
                        {errors.selectedDate && (
                            <span className="text-red-500 text-xs">
                                {errors.selectedDate.message}
                            </span>
                        )}
                    </div>
                    <div className="flex-1">
                        <div className="font-semibold text-sm sm:text-base mb-2">
                            Giờ đến <span className="text-red-500">*</span>
                        </div>
                        <Controller
                            control={control}
                            name="selectedTime"
                            rules={{ required: 'Vui lòng chọn giờ đến' }}
                            render={({ field }) => (
                                <StyledTimePicker
                                    value={selectedTime}
                                    className="h-[38px]"
                                    onChange={value => {
                                        setField('selectedTime', value);
                                        field.onChange(value);
                                    }}
                                />
                            )}
                        />
                        {errors.selectedTime && (
                            <span className="text-red-500 text-xs">
                                {errors.selectedTime.message}
                            </span>
                        )}
                    </div>
                </div>
                <div>
                    <div className="font-semibold text-base mb-2">Ghi chú</div>
                    <textarea
                        className="border border-solid border-[#dbdbdb] dark:border-[#292929] dark:bg-[#1e1e1e] pt-2 px-3 text-[15px] rounded-md resize-none w-full outline-none bg-transparent"
                        rows={4}
                        placeholder="Ghi chú"
                        {...register('note')}
                        onChange={e => {
                            setField('note', e.target.value);
                            setValue('note', e.target.value);
                        }}
                        value={note}
                    ></textarea>
                </div>
            </div>
        </form>
    );
});

export default CustomerDetails;
