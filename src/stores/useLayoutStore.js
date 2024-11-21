import { create } from 'zustand';

const useLayoutStore = create(set => ({
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
}));

export default useLayoutStore;
