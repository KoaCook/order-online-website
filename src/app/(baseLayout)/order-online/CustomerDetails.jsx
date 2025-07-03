'use client';

import { LocationIcon, PhoneIcon, UserIcon } from '@/components/Icons';
import StyledSelect from '@/components/StyledSelect';
import { cities } from '@/constants/branches';
import useDistrictWardOptions from '@/hooks/useDistrictWardOptions';
import useLayoutStore from '@/stores/useLayoutStore';
import { useMemo, useState, useEffect, useRef } from 'react';
import styles from './CustomerDetails.module.css';

const ANIMATION_DURATION = 400; // ms

const CustomerDetails = () => {
    const chosenMethod = useLayoutStore(state => state.chosenMethod);
    const { districts, getWards } = useDistrictWardOptions();
    const [district, setDistrict] = useState('');
    const [ward, setWard] = useState('');

    // Animation state for delivery section
    const [showDelivery, setShowDelivery] = useState(chosenMethod === 'delivery');
    const [deliveryAnim, setDeliveryAnim] = useState(chosenMethod === 'delivery' ? 'slideIn' : '');
    const prevMethod = useRef(chosenMethod);

    const wardOptions = useMemo(() => (district ? getWards(district) : []), [district, getWards]);

    const handleDistrictChange = selected => {
        setDistrict(selected);
        setWard('');
    };

    useEffect(() => {
        if (chosenMethod === 'delivery' && !showDelivery) {
            // Mount and animate in
            setShowDelivery(true);
            setTimeout(() => setDeliveryAnim('slideIn'), 10); // allow DOM to mount
        } else if (chosenMethod !== 'delivery' && showDelivery) {
            // Animate out, then unmount
            setDeliveryAnim('slideOut');
            const timeout = setTimeout(() => setShowDelivery(false), ANIMATION_DURATION);
            return () => clearTimeout(timeout);
        }
        prevMethod.current = chosenMethod;
    }, [chosenMethod, showDelivery]);

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
                    />
                </div>
            </div>
            {showDelivery && (
                <div
                    className={`${styles.deliverySection} ${
                        deliveryAnim ? styles[deliveryAnim] : ''
                    }`}
                    style={{ minHeight: 0 }}
                >
                    <div className="px-3 mt-[22px] border border-solid border-[#dbdbdb] flex items-center h-10 rounded-lg overflow-hidden mb-[22px]">
                        <span className="text-primary mr-2.5 w-7 h-6 flex items-center -ml-1">
                            <LocationIcon />
                        </span>
                        <input
                            type="text"
                            className="py-2 w-full flex-1 caret-primary text-[15px] outline-none"
                            placeholder="Địa chỉ"
                        />
                    </div>
                    <div className="flex gap-3">
                        <StyledSelect
                            options={cities}
                            placeholder="Tỉnh/Thành phố"
                            value={cities[0].value}
                            className="flex-1"
                        />
                        <StyledSelect
                            options={districts}
                            value={district}
                            onChange={handleDistrictChange}
                            placeholder="Quận/Huyện"
                            className="flex-1"
                        />
                        <StyledSelect
                            options={wardOptions}
                            value={ward}
                            onChange={setWard}
                            placeholder="Phường/Xã"
                            disabled={!district}
                            className="flex-1"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomerDetails;
