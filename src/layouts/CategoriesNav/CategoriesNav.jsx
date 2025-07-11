import CategoriesList from './CategoriesList';
import Search from './Search';

const CategoriesNav = () => {
    return (
        <div className="md:flex justify-between items-center">
            <CategoriesList />

            <div className="mt-4 md:mt-0">
                <Search />
            </div>
        </div>
    );
};

export default CategoriesNav;
