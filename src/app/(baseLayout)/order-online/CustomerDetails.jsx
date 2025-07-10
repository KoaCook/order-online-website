'use client';

import { LocationIcon, PhoneIcon, UserIcon } from '@/components/Icons';
import StyledSelect from '@/components/StyledSelect';
import { cities } from '@/constants/branches';
import useDistrictWardOptions from '@/hooks/useDistrictWardOptions';
import useCustomerDetails from '@/stores/useCustomerDetails';
import useLayoutStore from '@/stores/useLayoutStore';
import { AnimatePresence, motion } from 'framer-motion';
import { forwardRef, useEffect, useImperativeHandle, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';

const deliveryVariants = {
    hidden: { x: '-100%' },
    visible: { x: 0 },
    exit: { x: '-100%' },
};

const CustomerDetails = ({ onSubmit: onSubmitProp }, ref) => {
    const chosenMethod = useLayoutStore(state => state.chosenMethod);

    // Zustand store for customer details
    const { name, phone, city, district, ward, address, setField, setDeliveryDetails } =
        useCustomerDetails();

    const { districts, getWards } = useDistrictWardOptions(city);
    const wardOptions = useMemo(() => (district ? getWards(district) : []), [district, getWards]);

    const {
        register,
        handleSubmit,
        control,
        setValue,
        formState: { errors },
        trigger,
    } = useForm({
        defaultValues: {
            name: name || '',
            phone: phone || '',
            address: address || '',
            city: city || '',
            district: district || '',
            ward: ward || '',
        },
        mode: 'onBlur',
    });

    // Sync Zustand store with RHF when store changes externally
    useEffect(() => {
        setValue('name', name || '');
    }, [name, setValue]);
    useEffect(() => {
        setValue('phone', phone || '');
    }, [phone, setValue]);
    useEffect(() => {
        setValue('address', address || '');
    }, [address, setValue]);
    useEffect(() => {
        setValue('city', city || '');
    }, [city, setValue]);
    useEffect(() => {
        setValue('district', district || '');
    }, [district, setValue]);
    useEffect(() => {
        setValue('ward', ward || '');
    }, [ward, setValue]);

    // Expose submitForm to parent via ref (if needed)
    // If you want to use forwardRef, uncomment below and wrap export with forwardRef
    useImperativeHandle(ref, () => ({
        submitForm: () =>
            new Promise(resolve => {
                handleSubmit(
                    data => resolve(data), // valid: return data
                    () => resolve(null), // invalid: return null
                )();
            }),
    }));

    const onSubmit = data => {
        if (onSubmitProp) {
            onSubmitProp(data);
        }
    };

    // Handlers for delivery details (sync both RHF and Zustand)
    const handleCityChange = selectedCity => {
        setDeliveryDetails({ city: selectedCity, district: '', ward: '' });
        setValue('city', selectedCity, { shouldValidate: true });
        setValue('district', '', { shouldValidate: true });
        setValue('ward', '', { shouldValidate: true });
        trigger(['city', 'district', 'ward']);
    };

    const handleDistrictChange = selectedDistrict => {
        setDeliveryDetails({ district: selectedDistrict, ward: '' });
        setValue('district', selectedDistrict, { shouldValidate: true });
        setValue('ward', '', { shouldValidate: true });
        trigger(['district', 'ward']);
    };

    const handleWardChange = selectedWard => {
        setDeliveryDetails({ ward: selectedWard });
        setValue('ward', selectedWard, { shouldValidate: true });
        trigger('ward');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="overflow-hidden">
            <div className="text-base uppercase mb-5">
                Thông tin người nhận <span className="text-red-500">*</span>
            </div>
            <div className="flex">
                <div className="px-3 border border-solid border-[#dbdbdb] dark:border-[#292929] dark:bg-[#1e1e1e] flex items-center h-10 rounded-lg mr-3 flex-1 overflow-hidden">
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
                <div className="px-3 border border-solid border-[#dbdbdb] dark:border-[#292929] dark:bg-[#1e1e1e] flex items-center h-10 rounded-lg flex-1 overflow-hidden">
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
            </div>
            <div className="flex">
                <div className="flex-1 mr-3">
                    {errors.name && (
                        <span className="text-red-500 text-xs">{errors.name.message}</span>
                    )}
                </div>
                <div className="flex-1">
                    {errors.phone && (
                        <span className="text-red-500 text-xs">{errors.phone.message}</span>
                    )}
                </div>
            </div>
            <AnimatePresence>
                {chosenMethod === 'delivery' && (
                    <motion.div
                        key="delivery-section"
                        style={{ minHeight: 0 }}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={deliveryVariants}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <div className="mb-[22px]">
                            <div className="px-3 mt-[22px] border border-solid border-[#dbdbdb] dark:border-[#292929] dark:bg-[#1e1e1e] flex items-center h-10 rounded-lg overflow-hidden">
                                <span className="text-primary mr-2.5 w-7 h-6 flex items-center -ml-1">
                                    <LocationIcon />
                                </span>
                                <input
                                    type="text"
                                    className="py-2 w-full flex-1 caret-primary text-[15px] outline-none bg-transparent"
                                    placeholder="Địa chỉ"
                                    {...register('address', {
                                        validate: value =>
                                            chosenMethod !== 'delivery' ||
                                            (value && value.length >= 5) ||
                                            'Vui lòng nhập địa chỉ hợp lệ',
                                        required: 'Vui lòng nhập địa chỉ',
                                        minLength: { value: 5, message: 'Địa chỉ quá ngắn' },
                                    })}
                                    onChange={e => {
                                        setDeliveryDetails({ address: e.target.value });
                                        setValue('address', e.target.value, {
                                            shouldValidate: true,
                                        });
                                    }}
                                    value={address}
                                />
                            </div>
                            {errors.address && (
                                <span className="text-red-500 text-xs">
                                    {errors.address.message}
                                </span>
                            )}
                        </div>
                        <div className="flex gap-3">
                            <Controller
                                control={control}
                                name="city"
                                rules={{
                                    validate: value =>
                                        chosenMethod !== 'delivery' || value
                                            ? true
                                            : 'Vui lòng chọn tỉnh/thành phố',
                                }}
                                render={({ field }) => (
                                    <StyledSelect
                                        options={cities}
                                        placeholder="Tỉnh/Thành phố"
                                        value={city}
                                        onChange={value => {
                                            handleCityChange(value);
                                            field.onChange(value);
                                        }}
                                        className="flex-1"
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name="district"
                                rules={{
                                    validate: value =>
                                        chosenMethod !== 'delivery' || value
                                            ? true
                                            : 'Vui lòng chọn quận/huyện',
                                }}
                                render={({ field }) => (
                                    <StyledSelect
                                        options={districts}
                                        value={district}
                                        onChange={value => {
                                            handleDistrictChange(value);
                                            field.onChange(value);
                                        }}
                                        placeholder="Quận/Huyện"
                                        className="flex-1"
                                        disabled={!city}
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name="ward"
                                rules={{
                                    validate: value =>
                                        chosenMethod !== 'delivery' || value
                                            ? true
                                            : 'Vui lòng chọn phường/xã',
                                }}
                                render={({ field }) => (
                                    <StyledSelect
                                        options={wardOptions}
                                        value={ward}
                                        onChange={value => {
                                            handleWardChange(value);
                                            field.onChange(value);
                                        }}
                                        placeholder="Phường/Xã"
                                        disabled={!district}
                                        className="flex-1"
                                    />
                                )}
                            />
                        </div>
                        <div className="flex gap-3">
                            <div className="flex-1">
                                {errors.city && (
                                    <span className="text-red-500 text-xs">
                                        {errors.city.message}
                                    </span>
                                )}
                            </div>
                            <div className="flex-1">
                                {errors.district && (
                                    <span className="text-red-500 text-xs">
                                        {errors.district.message}
                                    </span>
                                )}
                            </div>
                            <div className="flex-1">
                                {errors.ward && (
                                    <span className="text-red-500 text-xs">
                                        {errors.ward.message}
                                    </span>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </form>
    );
};

// If you want to expose submitForm via ref, wrap with forwardRef:
export default forwardRef(CustomerDetails);
// export default CustomerDetails;
