import useSWR from 'swr';

const menuItemApi = {
    useItemDetails(id) {
        const url = `/menu-items/order-online-system/${id}/details`;
        return useSWR(url);
    },
};

export default menuItemApi;
