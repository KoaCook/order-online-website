import Image from 'next/image';
import { Moon } from 'react-feather';
import Cart from './Cart';
import LanguageSwitcher from './LanguageSwitcher';
import OrderHistory from './OrderHistory';
import OrderTypeSwitcher from './OrderTypeSwitcher';
import DarkModeBtn from './DarkModeBtn';

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
                    <OrderHistory />
                    <Cart />
                    <DarkModeBtn />
                    <LanguageSwitcher />
                </div>
            </div>
        </header>
    );
};

export default Header;
