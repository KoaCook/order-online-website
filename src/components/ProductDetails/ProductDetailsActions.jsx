import formatPrice from '@/utils/formatPrice';
import clsx from 'clsx';
import { Minus, Plus } from 'react-feather';
import ErrorAlert from '../ErrorAlert';
import { CheckIcon } from '../Icons';
import { useState } from 'react';
import Button from '../Button';
import useCart from '@/stores/useCart';
import useNotifications from '@/stores/useNotifications';
import notifications from '@/constants/notifications';

const ProductDetailsActions = ({ data, error, isLoading, isValidating, onClose }) => {
    const addProduct = useCart(state => state.addProduct);
    const addNotification = useNotifications(state => state.addNotification);
    const [quantity, setQuantity] = useState(1);

    const handleAddProduct = () => {
        addProduct({ id: String(data.id), price: data.price, quantity, name: data.name });
        onClose();
        addNotification(notifications.ADD_PRODUCT_TITLE, `${data.name} x${quantity}`);
    };

    return (
        <>
            <div
                className={clsx(
                    'sm:p-5 bg-paper dark:bg-[#1b1b1b] flex-1 overflow-y-scroll dark:text-white',
                    (isLoading || isValidating) && 'pointer-events-none select-none opacity-60',
                )}
            >
                {(error || !data) && !isLoading && !isValidating && (
                    <ErrorAlert showReload={false} />
                )}
                {!error && data && (
                    <>
                        <div className="sm:flex mb-7.5">
                            <div className="w-full h-[200px] sm:h-auto sm:w-[250px] sm:aspect-[4/3] relative mr-2 sm:rounded-md overflow-hidden">
                                <div
                                    style={{
                                        backgroundImage: `url(/fallback_product_img.png)`,
                                    }}
                                    className="w-full h-full bg-center bg-contain bg-no-repeat"
                                />
                                <div
                                    style={{
                                        backgroundImage: `url(${data?.image_url})`,
                                    }}
                                    className="w-full h-full bg-center bg-cover bg-no-repeat absolute top-0 right-0 left-0 bottom-0 z-10"
                                />
                            </div>
                            <div className="flex-1 px-4 text-base sm:text-xl md:text-2xl mt-4 sm:mt-0">
                                <div className="flex items-center justify-between sm:items-start sm:justify-start sm:flex-col">
                                    <div className="sm:mb-2.5">{data?.name}</div>
                                    <div className="font-semibold">
                                        {formatPrice(data?.price)} đ
                                    </div>
                                </div>
                                <div className="my-4 sm:hidden border-t border-solid border-[#dbdbdb] dark:border-darkDivider"></div>
                                <div className="sm:mt-4 text-sm sm:text-base">
                                    {data?.description || 'Không có mô tả cho sản phẩm này.'}
                                </div>
                            </div>
                        </div>
                        {/* The rest of your options, checkboxes, textarea, etc. can remain unchanged */}
                        <div className="px-4">
                            <div className="text-sm sm:text-base uppercase font-bold my-4">
                                Độ ngọt
                            </div>
                            <div className="flex items-center mt-1 pt-1">
                                <div className="inline-flex items-center mr-2">
                                    <label className="flex items-center cursor-pointer relative">
                                        <input
                                            type="checkbox"
                                            className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-md shadow hover:shadow-md border border-slate-400 checked:bg-primary checked:border-primary"
                                            id="checkbox1"
                                        />
                                        <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                            <CheckIcon />
                                        </span>
                                    </label>
                                </div>
                                <label
                                    htmlFor="checkbox1"
                                    className="flex items-center text-sm sm:text-base select-none cursor-pointer"
                                >
                                    <span>30% Đường</span>
                                </label>
                            </div>
                        </div>
                        <div className="mt-10 mb-2 px-4">
                            <textarea
                                placeholder="Ghi chú"
                                className="px-3 pt-2 text-sm sm:text-[15px] bg-white border border-solid border-[#dbdbdb] dark:bg-transparent dark:border-[#292929] rounded-lg resize-none w-full outline-none caret-primary"
                                rows={3}
                            ></textarea>
                        </div>
                    </>
                )}
            </div>
            <div className="p-4 sm:p-5 bg-white dark:bg-dark dark:text-white flex items-center justify-between">
                <div className="flex items-center">
                    <span className="hidden sm:inline-block text-base mr-3">Số lượng</span>
                    <div className="flex items-center">
                        <button
                            className="flex items-center justify-center h-[34px] w-[34px] rounded-full text-primary border border-solid dark:bg-primary dark:text-white border-primary ripple-quantity-btn"
                            onClick={() => {
                                if (quantity > 1) {
                                    setQuantity(quantity - 1);
                                }
                            }}
                        >
                            <Minus size={18} />
                        </button>
                        <div className="w-[65px] text-center bg-transparent text-xl font-bold">
                            {quantity}
                        </div>
                        <button
                            className="flex items-center justify-center h-[34px] w-[34px] rounded-full text-primary border border-solid dark:bg-primary dark:text-white border-primary ripple-quantity-btn"
                            onClick={() => setQuantity(quantity + 1)}
                        >
                            <Plus size={18} />
                        </button>
                    </div>
                </div>
                <div className="w-[200px] sm:w-[260px]">
                    <Button onClick={handleAddProduct}>
                        Thêm vào giỏ - {formatPrice(data?.price * quantity)} đ
                    </Button>
                </div>
            </div>
        </>
    );
};

export default ProductDetailsActions;
