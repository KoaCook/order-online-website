import { create } from 'zustand';

const useCustomerDetails = create(set => ({
    name: '',
    phone: '',
    note: '',

    // Delivery details
    city: '',
    district: '',
    ward: '',
    address: '',

    // Dining details
    numOfCustomers: 0,
    date: '',
    time: '',

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
}));

export default useCustomerDetails;
