'use server';

import Banner from '@/layouts/Banner';
import CategoriesNav from '@/layouts/CategoriesNav';
import ProductsList from './ProductsList';

const HomePage = () => {
    return (
        <div className="max-w-xl mx-auto w-full px-3 pb-14">
            <div className="pt-6 pb-7">
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
