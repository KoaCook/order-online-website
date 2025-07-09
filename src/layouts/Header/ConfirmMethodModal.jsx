import Button from '@/components/Button';
import routes from '@/config/routes';
import useCart from '@/stores/useCart';
import useLayoutStore from '@/stores/useLayoutStore';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { memo, useEffect, useRef, useState } from 'react';

const ConfirmMethodModal = ({ isOpenConfirmModal, closeConfirmModal, method }) => {
    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter();
    const setChosenMethod = useLayoutStore(state => state.setChosenMethod);
    const resetCart = useCart(state => state.resetCart);
    const modalRef = useRef();

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => {
            closeConfirmModal();
        }, [300]);
    };

    const handleChoose = () => {
        if (method.key === 'reservation') {
            router.push(routes.RESERVATION);
        } else {
            router.push(routes.HOME);
        }

        setChosenMethod(method.key);
        closeConfirmModal();
        resetCart();
    };

    useEffect(() => {
        if (isOpenConfirmModal) {
            // Trigger initial animation
            setTimeout(() => {
                setIsVisible(true);
            }, 0); // Delay to ensure modal is mounted before animation
        }
    }, [isOpenConfirmModal]);

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

    if (!isOpenConfirmModal) return null;

    return (
        <div className="fixed top-0 right-0 bottom-0 left-0 z-[999] flex items-center justify-center">
            <div
                className={clsx(
                    'absolute top-0 left-0 w-full h-full bg-[rgba(33,33,33,0.46)] -z-10 transition-all duration-300 ease-ease',
                    isVisible && 'opacity-100',
                    !isVisible && 'opacity-0',
                )}
            ></div>
            <div
                className={clsx(
                    'relative z-10 w-full max-w-[350px] max-h-[90%] m-6 shadow-product-details-modal bg-paper rounded-md transition-all ease-ease duration-300 overflow-hidden',
                    isVisible && 'opacity-100 scale-100',
                    !isVisible && 'opacity-0 scale-75',
                )}
                ref={modalRef}
            >
                <div className="p-4">
                    <div className="text-xl font-bold mb-4">Thay đổi hình thức</div>
                    <div className="mb-4 text-[15px]">
                        Bạn có chắc chắn muốn chuyển sang hình thức{' '}
                        <span className="font-bold">{method.label}</span> không?
                        <br />
                        <span className="font-bold">
                            Thao tác này sẽ xóa thông tin các món đã đặt trước đó
                        </span>
                    </div>
                    <div className="flex justify-end">
                        <div className="min-w-16 mr-1.5">
                            <Button className="font-normal" onClick={handleChoose}>
                                ĐỒNG Ý
                            </Button>
                        </div>
                        <div className="min-w-16 mr-1.5">
                            <Button className="font-normal" variant="surface" onClick={handleClose}>
                                HUỶ BỎ
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(ConfirmMethodModal);
