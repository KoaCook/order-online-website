'use client';

import useCart from '@/stores/useCart';
import formatPrice from '@/utils/formatPrice';
import { Minus, Plus, Trash } from 'react-feather';

const ProductCartItem = ({ data }) => {
    const removeProduct = useCart(state => state.removeProduct);
    const editQuantity = useCart(state => state.editQuantity);

    return (
        <div className="relative dark:text-white">
            <div className="text-base sm:text-lg font-semibold w-[250px] mb-5">{data.name}</div>
            <button
                className="h-8 w-8 text-[rgba(0,0,0,.54)] dark:text-white flex items-center justify-center ripple rounded-full absolute right-0 -top-1.5"
                onClick={() => removeProduct(data.id)}
            >
                <Trash size={18} />
            </button>

            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <button
                        className="flex items-center justify-center h-[34px] w-[34px] rounded-full text-primary border border-solid border-primary ripple-quantity-btn dark:bg-primary dark:text-white"
                        onClick={() => editQuantity(data.id, data.quantity - 1)}
                    >
                        <Minus size={18} />
                    </button>
                    <div className="w-[65px] text-center bg-transparent text-xl font-bold">
                        {data.quantity}
                    </div>
                    <button
                        className="flex items-center justify-center h-[34px] w-[34px] rounded-full text-primary border border-solid border-primary ripple-quantity-btn dark:bg-primary dark:text-white"
                        onClick={() => editQuantity(data.id, data.quantity + 1)}
                    >
                        <Plus size={18} />
                    </button>
                </div>
                <div className="text-sm sm:text-base mr-1">
                    {formatPrice(data.price * data.quantity)} đ
                </div>
            </div>
            <hr className="my-3 sm:my-4 border-t border-solid border-[rgba(0,0,0,.12)] dark:border-darkDivider w-full" />
        </div>
    );
};

export default ProductCartItem;
