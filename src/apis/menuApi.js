import useSWR from 'swr';

const menuApi = {
    useMenusList() {
        const url = '/menus/order-online-system/list';
        return useSWR(url);
    },
    useMenusCategoryList(slug) {
        const url = `/menus/order-online-system/${slug}/menu-list`;
        return useSWR(url);
    },
};

export default menuApi;
