'use server';

import Banner from '@/layouts/Banner';
import CategoriesNav from '@/layouts/CategoriesNav';
import ProductsList from './ProductsList';

const HomePage = () => {
    return (
        <div className="md:max-w-[900px] xl:max-w-xl mx-auto w-full px-3 pb-10 md:pb-14 flex-1">
            <div className="pt-5 sm:pt-6 sm:pb-7">
                <Banner />
            </div>
            <div className="pb-4">
                <CategoriesNav />
            </div>

            <div className="mt-5">
                <ProductsList />
            </div>
        </div>
    );
};

export default HomePage;
