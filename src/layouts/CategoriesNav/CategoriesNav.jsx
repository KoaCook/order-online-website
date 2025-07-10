import CategoriesList from './CategoriesList';
import Search from './Search';

const CategoriesNav = () => {
    return (
        <div className="flex justify-between items-center">
            <CategoriesList />

            <Search />
        </div>
    );
};

export default CategoriesNav;
