'use client';

import clsx from 'clsx';
import { useRef, useState } from 'react';

const categories = [
    'Tất cả',
    'Món Ăn Vặt',
    'Topping',
    'Đồ uống',
    'Nước ép trái cây',
    'Kem',
    'Bánh Ngọt',
    'Trà Sữa',
    'Sữa chua',
    'Happy Meal',
];

const CategoriesList = () => {
    const scrollRef = useRef(null);
    const categoryRefs = useRef([]); // Array of refs for each category button
    const [selectedCategory, setSelectedCategory] = useState('Tất cả'); // Initialize with the default active category
    let isDragging = false;
    let startX, scrollLeft;

    const handleMouseDown = e => {
        isDragging = true;
        startX = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft = scrollRef.current.scrollLeft;
    };

    const handleMouseMove = e => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = x - startX;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUpOrLeave = () => {
        isDragging = false;
    };

    const handleCategoryClick = (category, index) => {
        setSelectedCategory(category);

        // Scroll the clicked category into view
        categoryRefs.current[index].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center', // Center the clicked item horizontally
        });
    };

    return (
        <div
            className="flex items-center flex-1 max-w-category-nav overflow-x-scroll no-scrollbar"
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUpOrLeave}
            onMouseUp={handleMouseUpOrLeave}
        >
            {categories.map((category, i) => (
                <button
                    key={i}
                    ref={el => (categoryRefs.current[i] = el)} // Assign each button to the refs array
                    onClick={() => handleCategoryClick(category, i)}
                    className={clsx(
                        'px-4 mr-2 rounded-md h-10 text-sm font-normal whitespace-nowrap outline-none',
                        category !== selectedCategory &&
                            'bg-[#f5f5f5] text-black ripple-unactive-category-btn',
                        category === selectedCategory && 'bg-primary text-white ripple-primary'
                    )}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoriesList;
