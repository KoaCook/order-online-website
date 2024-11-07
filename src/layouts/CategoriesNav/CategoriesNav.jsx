import React from 'react';
import Search from './Search';
import CategoriesList from './CategoriesList';

const CategoriesNav = () => {
    return (
        <div className="flex justify-between items-center">
            <CategoriesList />
            <Search />
        </div>
    );
};

export default CategoriesNav;
