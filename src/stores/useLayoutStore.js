import { create } from 'zustand';

const useLayoutStore = create(set => ({
    isOpenProductModal: false,

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
}));

export default useLayoutStore;
