import Button from '@/components/Button';
import StyledSelect from '@/components/StyledSelect';
import routes from '@/config/routes';
import branches, { cities } from '@/constants/branches';
import useDistrictWardOptions from '@/hooks/useDistrictWardOptions';
import useCustomerDetails from '@/stores/useCustomerDetails';
import useLayoutStore from '@/stores/useLayoutStore';
import { useRouter } from 'next/navigation';
import { memo, useMemo, useState } from 'react';

const DeliveryMethod = ({ handleCloseModal }) => {
    const router = useRouter();
    const setChosenMethod = useLayoutStore(state => state.setChosenMethod);
    const setDeliveryDetails = useCustomerDetails(state => state.setDeliveryDetails);
    const { districts, getWards } = useDistrictWardOptions();
    const [district, setDistrict] = useState('');
    const [ward, setWard] = useState('');

    const handleDistrictChange = selected => {
        setDistrict(selected);
        setWard('');
    };

    const wardOptions = useMemo(() => (district ? getWards(district) : []), [district, getWards]);

    const handleChoose = () => {
        setDeliveryDetails({ city: cities[0].label, district, ward });
        setChosenMethod('delivery');
        router.push(routes.HOME);
        handleCloseModal();
    };

    return (
        <div>
            <div className="pt-6 px-5 pb-4">
                <div className="text-sm font-semibold mb-2.5">Chi nhánh giao hàng</div>
                <div className="flex flex-wrap gap-[20px]">
                    {branches.map(branch => {
                        const checked = true;
                        return (
                            <label
                                key={branch.id}
                                className={`flex items-center cursor-pointer p-3 border rounded-lg transition group ${
                                    checked && 'border-primary'
                                }`}
                                style={{
                                    flex: '1 1 calc(50% - 10px)',
                                    maxWidth: 'calc(50% - 10px)',
                                }}
                            >
                                {/* Custom large radio */}
                                <span className="mr-4 flex items-center">
                                    <span className="relative flex items-center justify-center w-7 h-7">
                                        <input
                                            type="radio"
                                            name="branch"
                                            value={branch.id}
                                            defaultChecked
                                            className="absolute w-6 h-6 opacity-0 cursor-pointer"
                                        />
                                        <span
                                            className={`block w-6 h-6 rounded-full border transition-colors duration-200
                                            ${checked ? 'border-primary' : 'border-gray-400'}`}
                                        />
                                        {checked && (
                                            <span className="absolute w-3 h-3 bg-primary rounded-full"></span>
                                        )}
                                    </span>
                                </span>
                                {/* Branch info */}
                                <div>
                                    <div className="font-medium text-sm text-gray-900 dark:text-white group-hover:text-primary">
                                        {branch.name}
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        {branch.address}
                                    </div>
                                </div>
                            </label>
                        );
                    })}
                </div>
            </div>
            <div className="shadow-[0_-3px_6px_rgba(0,0,0,.1)] p-5">
                <div className="text-sm font-semibold mb-2.5">Địa chỉ nhận hàng</div>
                <div className="flex flex-col gap-4">
                    <StyledSelect
                        options={cities}
                        placeholder="Chọn thành phố giao hàng"
                        value={cities[0].value}
                    />
                    <StyledSelect
                        options={districts}
                        value={district}
                        onChange={handleDistrictChange}
                        placeholder="Chọn quận/huyện giao hàng"
                    />
                    <StyledSelect
                        options={wardOptions}
                        value={ward}
                        onChange={setWard}
                        placeholder="Chọn phường/xã giao hàng"
                        disabled={!district}
                    />
                </div>
                <div className="flex justify-center">
                    <div className="w-[368px] mt-4">
                        <Button disabled={!district || !ward} onClick={handleChoose}>
                            ĐỒNG Ý
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(DeliveryMethod);
