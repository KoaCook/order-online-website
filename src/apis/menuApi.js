import useSWR from 'swr';

const menuApi = {
    useMenusList() {
        const url = '/menus/order-online-system/list';
        return useSWR(url);
    },
};

export default menuApi;
