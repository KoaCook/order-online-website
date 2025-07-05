import useLayoutStore from '@/stores/useLayoutStore';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { Minus, Plus, X } from 'react-feather';

const ProductDetailsModal = () => {
    const [isVisible, setIsVisible] = useState(false);
    const closeProductModal = useLayoutStore(state => state.closeProductModal);
    const isOpenProductModal = useLayoutStore(state => state.isOpenProductModal);
    const modalRef = useRef();

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => {
            closeProductModal();
        }, [300]);
    };

    useEffect(() => {
        if (isOpenProductModal) {
            // Trigger initial animation
            setTimeout(() => {
                setIsVisible(true);
            }, 0); // Delay to ensure modal is mounted before animation
        }
    }, [isOpenProductModal]);

    useEffect(() => {
        const handleClickOutside = event => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                handleClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    if (!isOpenProductModal) return null;

    return (
        <div className="fixed top-0 right-0 bottom-0 left-0 z-[100] flex items-center justify-center">
            <div
                className={clsx(
                    'absolute top-0 left-0 w-full h-full bg-[rgba(33,33,33,0.46)] -z-10 transition-all duration-300 ease-ease',
                    isVisible && 'opacity-100',
                    !isVisible && 'opacity-0'
                )}
            ></div>
            <div
                className={clsx(
                    'relative z-10 w-full max-w-[800px] max-h-[90%] m-6 shadow-product-details-modal bg-paper rounded-md transition-all ease-ease duration-300 overflow-hidden',
                    isVisible && 'opacity-100 scale-100',
                    !isVisible && 'opacity-0 scale-75'
                )}
                ref={modalRef}
            >
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-3 w-6 h-6 flex items-center justify-center rounded-full bg-[#bcbdbe]"
                >
                    <X size={16} className="text-paper" />
                </button>
                <div className="p-5 bg-paper">
                    <div className="flex mb-7.5">
                        <div
                            style={{ backgroundImage: 'url(/fallback_product_img.png)' }}
                            className="w-[250px] h-[180px] bg-center bg-contain rounded-md mr-2"
                        />
                        <div className="flex-1 px-4 text-2xl">
                            <div className="mb-2.5">Xúc xích 3k (Cái)</div>
                            <div className="font-semibold">3.000 đ</div>
                            <div className="mt-4 text-base">
                                Hương vị cafe nguyên chất quyện với vị ngọt béo của sữa đặc, thơm
                                ngon và ấm nóng, đặc biệt phù hợp cho 1 ngày mùa đông se lạnh
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="text-base uppercase font-bold my-4">Độ ngọt</div>
                        <div className="flex items-center mt-1 pt-1">
                            <div class="inline-flex items-center mr-2">
                                <label class="flex items-center cursor-pointer relative">
                                    <input
                                        type="checkbox"
                                        className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-md shadow hover:shadow-md border border-slate-400 checked:bg-primary checked:border-primary"
                                        id="checkbox1"
                                    />
                                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-3.5 w-3.5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokeWidth="1"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </span>
                                </label>
                            </div>
                            <label
                                htmlFor="checkbox1"
                                className="flex items-center text-base select-none cursor-pointer"
                            >
                                <span>30% Đường</span>
                            </label>
                        </div>
                    </div>
                    <div className="mt-7.5">
                        <div className="text-base uppercase font-bold my-4">Khác</div>
                        <div className="flex items-center mt-1 pt-1">
                            <div class="inline-flex items-center mr-2">
                                <label class="flex items-center cursor-pointer relative">
                                    <input
                                        type="checkbox"
                                        className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-md shadow hover:shadow-md border border-slate-400 checked:bg-primary checked:border-primary"
                                        id="checkbox2"
                                    />
                                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-3.5 w-3.5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokeWidth="1"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </span>
                                </label>
                            </div>
                            <label
                                htmlFor="checkbox2"
                                className="flex items-center text-base select-none cursor-pointer"
                            >
                                <span>
                                    Nhiều sữa <span className="text-primary">(5.000đ)</span>
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="mt-10 mb-2">
                        <textarea
                            placeholder="Ghi chú"
                            className="px-3 pt-2 text-[15px] bg-white border border-solid border-[#dbdbdb] rounded-lg resize-none w-full outline-none caret-primary"
                            rows={3}
                        ></textarea>
                    </div>
                </div>
                <div className="p-5 bg-white flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="text-base mr-3">Số lượng</span>
                        <div className="flex items-center">
                            <button className="flex items-center justify-center h-[34px] w-[34px] rounded-full text-primary border border-solid border-primary ripple">
                                <Minus size={18} />
                            </button>
                            <div className="w-[65px] text-center bg-transparent text-xl font-bold">
                                1
                            </div>
                            <button className="flex items-center justify-center h-[34px] w-[34px] rounded-full text-primary border border-solid border-primary ripple">
                                <Plus size={18} />
                            </button>
                        </div>
                    </div>
                    <button className="text-white bg-primary h-10 px-4 w-[260px] min-w-16 text-sm uppercase rounded-md ripple-primary">
                        Thêm vào giỏ - 8.000 đ
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsModal;
