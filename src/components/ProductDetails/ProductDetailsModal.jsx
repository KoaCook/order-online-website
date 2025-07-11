import menuItemApi from '@/apis/menuItemApi';
import useLayoutStore from '@/stores/useLayoutStore';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { X } from 'react-feather';
import ProductDetailsActions from './ProductDetailsActions';

const ProductDetailsModal = () => {
    const [isVisible, setIsVisible] = useState(false);
    const productModalId = useLayoutStore(state => state.productModalId);
    const closeProductModal = useLayoutStore(state => state.closeProductModal);
    const isOpenProductModal = useLayoutStore(state => state.isOpenProductModal);
    const modalRef = useRef();

    const {
        data: rawData,
        error,
        isLoading,
        isValidating,
    } = menuItemApi.useItemDetails(productModalId);

    const data = rawData?.data;

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => {
            closeProductModal();
        }, 300);
    };

    useEffect(() => {
        if (isOpenProductModal) {
            setTimeout(() => {
                setIsVisible(true);
            }, 0);
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

    // Don't render anything if modal is not open
    if (!isOpenProductModal) return null;

    return (
        <div className="fixed top-0 right-0 bottom-0 left-0 z-[999] flex items-center justify-center">
            <div
                className={clsx(
                    'absolute top-0 left-0 w-full h-full bg-[rgba(33,33,33,0.46)] dark:bg-[rgba(0,0,0,0.7)] -z-10 transition-all duration-300 ease-ease',
                    isVisible && 'opacity-100',
                    !isVisible && 'opacity-0',
                )}
            ></div>
            <div
                className={clsx(
                    'flex flex-col relative z-10 w-full h-full sm:max-w-[800px] sm:max-h-[90%] sm:m-4 md:m-6 shadow-product-details-modal bg-paper dark:bg-lightDark sm:rounded-md transition-all ease-ease duration-300 overflow-hidden',
                    isVisible && 'opacity-100 scale-100',
                    !isVisible && 'opacity-0 scale-75',
                )}
                ref={modalRef}
            >
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-3 w-6 h-6 flex items-center justify-center rounded-full bg-[#9e9fa0] z-20"
                >
                    <X size={16} className="text-paper" />
                </button>
                {/* Loader overlay */}
                {(isLoading || isValidating) && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-[rgba(255,255,255,0.7)] dark:bg-[rgba(255,255,255,0.1)]">
                        <div className="loader"></div>
                    </div>
                )}
                {/* Modal content */}
                <ProductDetailsActions
                    data={data}
                    error={error}
                    isValidating={isValidating}
                    isLoading={isLoading}
                    onClose={handleClose}
                />
            </div>
        </div>
    );
};

export default ProductDetailsModal;
