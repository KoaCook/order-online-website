'use client';

import Button from '@/components/Button';
import routes from '@/config/routes';
import useCart from '@/stores/useCart';
import useCustomerDetails from '@/stores/useCustomerDetails';
import useLayoutStore from '@/stores/useLayoutStore';
import formatDate from '@/utils/formatDate';
import formatPrice from '@/utils/formatPrice';
import { useRouter } from 'next/navigation';

const BookingOnlineComplete = () => {
    const router = useRouter();
    const products = useCart(state => state.products);
    const resetCart = useCart(state => state.resetCart);
    const openMethodModal = useLayoutStore(state => state.openMethodModal);
    const resetCustomerDetails = useCustomerDetails(state => state.resetCustomerDetails);
    const { name, phone, numOfCustomers, note, selectedDate, selectedTime, createdOrderId } =
        useCustomerDetails();

    const handleGoBackHome = () => {
        resetCart();
        resetCustomerDetails();
        router.push(routes.HOME);
        openMethodModal();
    };

    return (
        <div className="max-w-xl mx-auto">
            <div className="flex items-center justify-center flex-col py-10">
                <div className="uppercase font-bold text-base mb-1.5">GỬI YÊU CẦU THÀNH CÔNG</div>
                <div className="text-base">Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất</div>
            </div>
            <div className="flex justify-between py-6">
                <div className="w-[650px] shadow-booking-online-complete-box px-6 py-[22px] rounded-md">
                    <div className="text-2xl mb-4 font-semibold">Thông tin đặt chỗ</div>
                    <div className="text-base pb-4">
                        <div className="mb-3 font-semibold">Nhà hàng</div>
                        <div className="mb-2">MISA SKYBAR - HCT</div>
                        <div className="mb-2">
                            Địa chỉ: Tầng 2 tòa nhà N03T1 - Khu Ngoại Giao Đoàn, Ngoaij Giao DDoan,
                            Thị trấn Cát Tiên, Huyện Cát Tiên, Lâm Đồng
                        </div>
                    </div>
                    <div className="text-base pb-4">
                        <div className="mb-3 font-semibold">Thông tin khách hàng</div>
                        <div className="mb-2">{name}</div>
                        <div className="mb-2">Số điện thoại: {phone}</div>
                    </div>
                    <div className="text-base">
                        <div className="mb-3 font-semibold">Thông tin đặt chỗ</div>
                        <div className="mb-2">Số khách: {numOfCustomers}</div>
                        <div className="mb-2">
                            Giờ đến: {selectedTime} - {formatDate(selectedDate)}
                        </div>
                        {note && <div className="mb-2">Ghi chú: {note}</div>}
                    </div>
                </div>
                <div className="w-[400px] pl-[22px] pt-2.5 pr-8 flex flex-col">
                    <div className="mb-3.5 text-2xl font-semibold">
                        Yêu cầu đặt chỗ <span className="text-primary">DC{createdOrderId}</span>
                    </div>
                    {products.length > 0 && (
                        <>
                            <div className="pr-3">
                                {products.map(item => (
                                    <div key={item.id} className="mb-[15px] flex justify-between">
                                        <div>
                                            <div className="text-base font-semibold">
                                                {item.quantity} x {item.name}
                                            </div>
                                            {/* <ul className="text-sm pl-2.5">
                                    <li>
                                        <span className="mr-1">+</span> Tươi (2.500 đ x 4)
                                    </li>
                                </ul> */}
                                        </div>
                                        <div className="text-base">
                                            {formatPrice(item.quantity * item.price)} đ
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 border-t border-solid border-[rgb(233,233,233)] pt-3.5 flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="text-base font-semibold mr-1 uppercase">
                                        Tổng
                                    </div>
                                    <div className="rounded-md text-white bg-primary text-base min-w-[60px] h-6 flex items-center justify-center leading-[24px]">
                                        {products.reduce((sum, p) => sum + (p.quantity || 1), 0)}{' '}
                                        món
                                    </div>
                                </div>
                                <div className="text-2xl font-semibold">
                                    {formatPrice(
                                        products.reduce(
                                            (sum, product) =>
                                                sum +
                                                (product.price || 0) * (product.quantity || 1),
                                            0,
                                        ),
                                    )}{' '}
                                    đ
                                </div>
                            </div>
                        </>
                    )}
                    <div className="mt-auto">
                        <Button onClick={handleGoBackHome}>VỀ TRANG CHỦ</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingOnlineComplete;
