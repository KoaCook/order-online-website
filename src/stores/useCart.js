import { create } from 'zustand';

const useCart = create(set => ({
    products: [], // each item is {id: int, name: string, quantity: int, price: int}

    addProduct(product) {
        set(state => {
            const existingIndex = state.products.findIndex(p => p.id === product.id);
            if (existingIndex !== -1) {
                // Product exists, increment quantity
                const updatedProducts = state.products.map((p, idx) =>
                    idx === existingIndex
                        ? { ...p, quantity: (p.quantity || 1) + (product.quantity || 1) }
                        : p,
                );
                return { products: updatedProducts };
            } else {
                // Product does not exist, add new
                return {
                    products: [...state.products, { ...product, quantity: product.quantity || 1 }],
                };
            }
        });
    },
    removeProduct(productId) {
        set(state => ({
            products: state.products.filter(p => p.id !== productId),
        }));
    },
    editQuantity(productId, quantity) {
        set(state => ({
            products: state.products.map(p => (p.id === productId ? { ...p, quantity } : p)),
        }));
    },
    resetCart() {
        set({ products: [] });
    },
}));

export default useCart;
