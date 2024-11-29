import Link from 'next/link';
import React from 'react';

const BookingOnlineComplete = () => {
    return (
        <div className="max-w-xl mx-auto">
            <div className="flex items-center justify-center flex-col py-10">
                <div className="uppercase font-semibold text-base mb-1.5">
                    GỬI YÊU CẦU THÀNH CÔNG
                </div>
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
                        <div className="mb-2">abc</div>
                        <div className="mb-2">Số điện thoại: 012312312</div>
                    </div>
                    <div className="text-base">
                        <div className="mb-3 font-semibold">Thông tin đặt chỗ</div>
                        <div className="mb-2">Số khách: 0</div>
                        <div className="mb-2">Giờ đến: 12:00 - 29/11/2024</div>
                    </div>
                </div>
                <div className="w-[400px] pl-[22px] pt-2.5 pr-8 flex flex-col">
                    <div className="mb-3.5 text-2xl font-semibold">
                        Yêu cầu đặt chỗ <span className="text-primary">DC7285695</span>
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
                    <div className="mt-4 border-t border-solid border-[rgb(233,233,233)] pt-3.5 flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="text-base font-semibold mr-1 uppercase">Tổng</div>
                            <div className="rounded-md text-white bg-primary text-base min-w-[60px] h-6 flex items-center justify-center leading-[24px]">
                                3 món
                            </div>
                        </div>
                        <div className="text-2xl font-semibold">103.000 đ</div>
                    </div>
                    <Link href="/" className="mt-auto">
                        <button className="w-full bg-primary text-white text-sm px-4 h-10 uppercase rounded-md ripple-primary">
                            VỀ TRANG CHỦ
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookingOnlineComplete;
