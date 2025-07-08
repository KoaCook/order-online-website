import { cities } from '@/constants/branches';
import { create } from 'zustand';

const initialState = {
    name: '',
    phone: '',
    note: '',

    // Delivery details
    city: cities[0].value,
    district: '',
    ward: '',
    address: '',

    // Dining details
    numOfCustomers: 0,
    date: '',
    time: '',

    paymentMethod: 'cash', // 'cash' or 'transfer'
    schedule: 'immediately',
    selectedDate: '',
    selectedTime: '',

    createdOrderId: '',
};

const useCustomerDetails = create(set => ({
    ...initialState,

    setDeliveryDetails: ({ city, district, ward, address }) =>
        set(state => ({
            city: city ?? state.city,
            district: district ?? state.district,
            ward: ward ?? state.ward,
            address: address ?? state.address,
        })),

    setField: (key, value) =>
        set(state => ({
            [key]: value,
        })),
    resetCustomerDetails: () => set(() => ({ ...initialState })),
}));

export default useCustomerDetails;
