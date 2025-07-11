'use client';

import routes from '@/config/routes';
import useCart from '@/stores/useCart';
import useLayoutStore from '@/stores/useLayoutStore';
import clsx from 'clsx';
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
                <>
                    <Image
                        src="/logo_final.webp"
                        alt="Logo"
                        width={182}
                        height={60}
                        className={clsx(
                            '!h-12 md:!h-full !w-auto',
                            pathname !== routes.HOME ? 'hidden md:block' : 'block',
                        )}
                    />
                    <Link
                        href={routes.HOME}
                        className={clsx(
                            'min-h-10 min-w-8 flex items-center justify-center rounded-lg ml-2.5 dark:text-white ripple text-primary',
                            pathname === routes.HOME ? 'hidden' : 'block md:hidden',
                        )}
                    >
                        <ArrowLeft size={22} />
                    </Link>
                    <div
                        className={clsx(
                            'font-semibold text-base uppercase dark:text-white',
                            pathname === routes.HOME ? 'hidden' : 'block md:hidden',
                        )}
                    >
                        {pathname === routes.ORDER && 'THANH TOÁN'}
                        {pathname === routes.RESERVATION && 'ĐẶT CHỖ'}
                    </div>
                </>
            ) : (
                <>
                    {pathname === routes.RESERVATION ? (
                        <>
                            <button
                                onClick={handleGoHomeFromReservation}
                                className="min-h-10 min-w-10 flex items-center justify-center rounded-lg ml-2.5 dark:text-white ripple"
                            >
                                <Home size={22} />
                            </button>
                            <div
                                className={clsx(
                                    'font-semibold text-base uppercase dark:text-white',
                                    pathname === routes.HOME ? 'hidden' : 'block md:hidden',
                                )}
                            >
                                {pathname === routes.RESERVATION && 'ĐẶT CHỖ'}
                            </div>
                        </>
                    ) : (
                        <Link
                            href={routes.RESERVATION}
                            className="min-h-10 min-w-10 flex items-center justify-center rounded-lg ml-2.5 dark:text-white ripple"
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
