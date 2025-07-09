import useCart from '@/stores/useCart';
import formatPrice from '@/utils/formatPrice';

const CartSummary = ({ isShort }) => {
    const products = useCart(state => state.products);

    const totalPrice = products.reduce(
        (sum, product) => sum + (product.price || 0) * (product.quantity || 1),
        0,
    );
    const taxFee = totalPrice * 0.08;

    return (
        <div className="text-base">
            {!isShort ? (
                <>
                    <div className="mb-3 flex items-center justify-between">
                        <div>Tiền hàng</div>
                        <div className="font-semibold">{formatPrice(totalPrice)} đ</div>
                    </div>
                    <div className="mb-3 flex items-center justify-between">
                        <div>Phí giao hàng</div>
                        <div className="font-semibold">0 đ</div>
                    </div>
                    <div className="mb-3 flex items-center justify-between">
                        <div>Giảm giá phí giao hàng</div>
                        <div className="font-semibold">- 0 đ</div>
                    </div>
                    <div className="mb-3 flex items-center justify-between">
                        <div>Tiền trước thuế</div>
                        <div className="font-semibold">{formatPrice(totalPrice)} đ</div>
                    </div>
                    <div className="mb-3 flex items-center justify-between">
                        <div>Thuế GTGT (8%)</div>
                        <div className="font-semibold">{formatPrice(taxFee)} đ</div>
                    </div>
                    <div className="my-4 border-t border-solid border-[rgba(0,0,0,0.12)]"></div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="text-base font-semibold uppercase mr-1">Tổng</div>
                            <div className="bg-primary text-white rounded-md min-w-[60px] h-6 px-2 text-center text-base leading-[24px]">
                                {products.reduce((sum, p) => sum + (p.quantity || 1), 0)} món
                            </div>
                        </div>
                        <div className="font-semibold text-2xl">
                            {formatPrice(totalPrice + taxFee)} đ
                        </div>
                    </div>
                </>
            ) : (
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="text-base font-semibold uppercase mr-1">Tổng</div>
                        <div className="bg-primary text-white rounded-md min-w-[60px] h-6 px-2 text-center text-base leading-[24px]">
                            {products.reduce((sum, p) => sum + (p.quantity || 1), 0)} món
                        </div>
                    </div>
                    <div className="font-semibold text-2xl">{formatPrice(totalPrice)} đ</div>
                </div>
            )}
        </div>
    );
};

export default CartSummary;
