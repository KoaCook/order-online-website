import { create } from 'zustand';

const useLayoutStore = create(set => ({
    isOpenMethodModal: true,
    isOpenProductModal: false,
    productModalId: null,
    isOpenCartDrawer: false,
    chosenMethod: 'delivery', // 'delivery' or 'pickup' or 'reservation'

    openProductModal(productId) {
        set(state => ({
            isOpenProductModal: true,
            productModalId: productId,
        }));
    },
    closeProductModal() {
        set(state => ({
            isOpenProductModal: false,
            productModalId: null,
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
    setChosenMethod(method) {
        set(state => ({ chosenMethod: method }));
    },
}));

export default useLayoutStore;
