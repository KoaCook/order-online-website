'use client';

import { LocationIcon, PhoneIcon, UserIcon } from '@/components/Icons';
import StyledSelect from '@/components/StyledSelect';
import { cities } from '@/constants/branches';
import useDistrictWardOptions from '@/hooks/useDistrictWardOptions';
import useLayoutStore from '@/stores/useLayoutStore';
import useCustomerDetails from '@/stores/useCustomerDetails';
import { useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const deliveryVariants = {
    hidden: { x: '-100%' },
    visible: { x: 0 },
    exit: { x: '-100%' },
};

const CustomerDetails = () => {
    const chosenMethod = useLayoutStore(state => state.chosenMethod);

    // Zustand store for customer details
    const { name, phone, city, district, ward, address, setField, setDeliveryDetails } =
        useCustomerDetails();

    const { districts, getWards } = useDistrictWardOptions(city);
    const wardOptions = useMemo(() => (district ? getWards(district) : []), [district, getWards]);

    // Handlers for delivery details
    const handleCityChange = selectedCity => {
        setDeliveryDetails({ city: selectedCity, district: '', ward: '' });
    };

    const handleDistrictChange = selectedDistrict => {
        setDeliveryDetails({ district: selectedDistrict, ward: '' });
    };

    const handleWardChange = selectedWard => {
        setDeliveryDetails({ ward: selectedWard });
    };

    return (
        <div className="overflow-hidden">
            <div className="text-base uppercase mb-5">
                Thông tin người nhận <span className="text-red-500">*</span>
            </div>
            <div className="flex">
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
                        <div className="px-3 mt-[22px] border border-solid border-[#dbdbdb] flex items-center h-10 rounded-lg overflow-hidden mb-[22px]">
                            <span className="text-primary mr-2.5 w-7 h-6 flex items-center -ml-1">
                                <LocationIcon />
                            </span>
                            <input
                                type="text"
                                className="py-2 w-full flex-1 caret-primary text-[15px] outline-none"
                                placeholder="Địa chỉ"
                                value={address}
                                onChange={e => setDeliveryDetails({ address: e.target.value })}
                            />
                        </div>
                        <div className="flex gap-3">
                            <StyledSelect
                                options={cities}
                                placeholder="Tỉnh/Thành phố"
                                value={city}
                                onChange={handleCityChange}
                                className="flex-1"
                            />
                            <StyledSelect
                                options={districts}
                                value={district}
                                onChange={handleDistrictChange}
                                placeholder="Quận/Huyện"
                                className="flex-1"
                                disabled={!city}
                            />
                            <StyledSelect
                                options={wardOptions}
                                value={ward}
                                onChange={handleWardChange}
                                placeholder="Phường/Xã"
                                disabled={!district}
                                className="flex-1"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CustomerDetails;
