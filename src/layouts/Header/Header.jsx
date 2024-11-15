import Image from 'next/image';
import { FileText, Moon } from 'react-feather';
import Cart from './Cart';
import LanguageSwitcher from './LanguageSwitcher';
import OrderTypeSwitcher from './OrderTypeSwitcher';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-fade">
            <div className="max-w-xl mx-auto px-3 py-1.5 h-[72px] w-full flex items-center justify-between">
                <Image
                    src="/logo_mixue.webp"
                    alt="Logo"
                    width={182}
                    height={60}
                    className="!h-full !w-auto"
                />
                <div className="flex items-center">
                    <OrderTypeSwitcher />
                    <button
                        type="button"
                        data-ripple-dark="true"
                        className="min-h-10 min-w-10 flex items-center justify-center rounded-lg ml-2.5 ripple px-3"
                    >
                        <FileText />
                        <span className="ml-1.5">Tra cứu đơn hàng</span>
                    </button>

                    <Cart />
                    <button
                        type="button"
                        data-ripple-dark="true"
                        className="min-h-10 min-w-10 flex items-center justify-center rounded-lg ml-2.5 ripple"
                    >
                        <Moon />
                    </button>
                    <LanguageSwitcher />
                </div>
            </div>
        </header>
    );
};

export default Header;
