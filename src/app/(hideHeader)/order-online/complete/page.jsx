import Button from '@/components/Button';
import routes from '@/config/routes';

const BookingOnlineComplete = () => {
    return (
        <div className="max-w-xl mx-auto">
            <div className="flex items-center justify-center flex-col py-10">
                <div className="uppercase font-bold text-base mb-1.5">ĐẶT HÀNG THÀNH CÔNG</div>
                <div className="text-base">Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất</div>
            </div>
            <div className="flex justify-between py-6">
                <div className="w-[650px] shadow-booking-online-complete-box px-6 py-[22px] rounded-md">
                    <div className="text-2xl mb-1 font-semibold">Thông tin đặt hàng</div>
                    <div className="text-base text-primary mb-4 font-semibold">Tự đến lấy</div>
                    <div className="text-base pb-4">
                        <div className="mb-3 font-semibold">Thông tin khách hàng</div>
                        <div className="mb-2 font-bold">abc</div>
                        <div className="mb-2">Số điện thoại: 012312312</div>
                        {/* <div className="mb-2">
                            Giao đến: 409/58 Nguyễn Oanh, Phường 17, Quận Gò Vấp, TPCHM
                        </div> */}
                    </div>
                </div>
                <div className="w-[400px] pl-[22px] pt-2.5 pr-8 flex flex-col">
                    <div className="mb-3.5 text-2xl font-semibold">
                        Đơn hàng <span className="text-primary">DH7285695</span>
                    </div>
                    <div className="pr-3">
                        <div className="mb-[15px] flex justify-between">
                            <div>
                                <div className="text-base font-semibold">1 x Trái cây sấy</div>
                                <ul className="text-sm pl-2.5">
                                    <li>
                                        <span className="mr-1">+</span> Tươi (2.500 đ x 4)
                                    </li>
                                </ul>
                            </div>
                            <div className="text-base">35.000 đ</div>
                        </div>
                        <div className="mb-[15px] flex justify-between">
                            <div>
                                <div className="text-base font-semibold">1 x Phở Bò</div>
                            </div>
                            <div className="text-base">35.000 đ</div>
                        </div>
                        <div className="mb-[15px] flex justify-between">
                            <div>
                                <div className="text-base font-semibold">1 x Trái cây sấy</div>
                                <ul className="text-sm pl-2.5">
                                    <li>
                                        <span className="mr-1">+</span> Tươi (2.500 đ x 4)
                                    </li>
                                </ul>
                            </div>
                            <div className="text-base">35.000 đ</div>
                        </div>
                    </div>
                    <div className="mt-4 pt-3.5 border-t border-solid border-[rgb(233,233,233)] text-base">
                        <div className="mb-3 flex items-center justify-between">
                            <div>Tiền hàng</div>
                            <div className="font-semibold">27.000 đ</div>
                        </div>
                        <div className="mb-3 flex items-center justify-between">
                            <div>Phí dịch vụ</div>
                            <div className="font-semibold">0 đ</div>
                        </div>
                        <div className="mb-2 flex items-center justify-between">
                            <div>Thuế GTGT (8%)</div>
                            <div className="font-semibold">2.000 đ</div>
                        </div>
                        <div className="mb-2 text-xl font-bold flex items-center justify-between">
                            <div>Tổng thanh toán</div>
                            <div className="text-primary">2.000 đ</div>
                        </div>
                        <div className="mb-3 flex items-center justify-between">
                            <div>Hình thức thanh toán</div>
                            <div className="font-semibold">Tiền mặt</div>
                        </div>
                    </div>
                    <div className="pt-5 mt-auto">
                        <Button variant="outline" className="mb-4">
                            TRA CỨU ĐƠN HÀNG
                        </Button>
                        <Button href={routes.HOME}>VỀ TRANG CHỦ</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingOnlineComplete;
