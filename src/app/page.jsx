import Banner from '@/layouts/Banner';
import CategoriesNav from '@/layouts/CategoriesNav';
import React from 'react';

const HomePage = () => {
    return (
        <div className="max-w-xl mx-auto px-3">
            <div className="pt-6 pb-5">
                <CategoriesNav />
            </div>
            <div className="pb-2">
                <Banner />
            </div>
        </div>
    );
};

export default HomePage;
