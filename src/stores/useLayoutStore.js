import { create } from 'zustand';

const useLayoutStore = create(set => ({
    isOpenMethodModal: true,
    isOpenProductModal: false,
    isOpenCartDrawer: false,

    openProductModal(productId) {
        set(state => ({
            isOpenProductModal: true,
        }));
    },
    closeProductModal() {
        set(state => ({
            isOpenProductModal: false,
        }));
    },
    openCartDrawer() {
        set(state => ({
            isOpenCartDrawer: true,
        }));
    },
    closeCartDrawer() {
        set(state => ({
            isOpenCartDrawer: false,
        }));
    },
    openMethodModal() {
        set(state => ({
            isOpenMethodModal: true,
        }));
    },
    closeMethodModal() {
        set(state => ({
            isOpenMethodModal: false,
        }));
    },
}));

export default useLayoutStore;
