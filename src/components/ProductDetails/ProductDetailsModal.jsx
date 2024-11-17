import useLayoutStore from '@/stores/useLayoutStore';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { XCircle } from 'react-feather';

const ProductDetailsModal = () => {
    const closeProductModal = useLayoutStore(state => state.closeProductModal);
    const modalRef = useRef();

    useEffect(() => {
        const handleClickOutside = event => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeProductModal();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [closeProductModal]);

    return (
        <div className="fixed top-0 right-0 bottom-0 left-0 z-[100] flex items-center justify-center">
            <div className="absolute top-0 left-0 w-full h-full bg-[rgb(33,33,33)] opacity-[0.46] -z-10"></div>
            <div
                className="relative z-10 w-full max-w-[800px] max-h-[90%] m-6 shadow-product-details-modal bg-[#f9f9f9] rounded-md"
                ref={modalRef}
            >
                <button
                    onClick={closeProductModal}
                    className="absolute top-4 right-3 w-6 h-6 rounded-full"
                >
                    <XCircle className="text-[rgba(0,0,0,.54)]" />
                </button>
                <div className="p-5">
                    <div className="flex mb-7.5">
                        <Image
                            src="/fallback_product_img.png"
                            alt="Product Details"
                            width={250}
                            height={180}
                            className="object-cover object-center rounded-md"
                        />
                        <div className="pl-4 text-2xl">
                            <div className="mb-2.5">Xúc xích 3k (Cái)</div>
                            <div className="font-semibold">3.000 đ</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsModal;
