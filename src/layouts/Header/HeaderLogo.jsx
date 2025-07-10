'use client';

import routes from '@/config/routes';
import useCart from '@/stores/useCart';
import useLayoutStore from '@/stores/useLayoutStore';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ArrowLeft, Home } from 'react-feather';

const HeaderLogo = () => {
    const resetCart = useCart(state => state.resetCart);
    const openMethodModal = useLayoutStore(state => state.openMethodModal);
    const isReservation = useLayoutStore(state => state.isReservation);
    const pathname = usePathname();
    const router = useRouter();

    const handleGoHomeFromReservation = () => {
        resetCart();
        router.push(routes.HOME);
        openMethodModal();
    };

    return (
        <>
            {!isReservation ? (
                <Image
                    src="/logo_final.webp"
                    alt="Logo"
                    width={182}
                    height={60}
                    className="!h-full !w-auto"
                />
            ) : (
                <>
                    {pathname === routes.RESERVATION ? (
                        <button
                            onClick={handleGoHomeFromReservation}
                            className="min-h-10 min-w-10 flex items-center justify-center rounded-lg ml-2.5 ripple"
                        >
                            <Home size={22} />
                        </button>
                    ) : (
                        <Link
                            href={routes.RESERVATION}
                            className="min-h-10 min-w-10 flex items-center justify-center rounded-lg ml-2.5 ripple"
                        >
                            <ArrowLeft size={22} />
                        </Link>
                    )}
                </>
            )}
        </>
    );
};

export default HeaderLogo;
