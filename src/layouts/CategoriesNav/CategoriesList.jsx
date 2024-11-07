'use client';

import clsx from 'clsx';
import { useRef } from 'react';

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
        const walk = x - startX; // Increase scroll speed
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUpOrLeave = () => {
        isDragging = false;
    };

    const active = 'Tất cả';

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
                    className={clsx(
                        'px-4 mr-2 rounded-md h-10 text-sm font-normal whitespace-nowrap outline-none',
                        category !== active && 'bg-[#f5f5f5] text-black ripple-f5f5f5',
                        category === active && 'bg-primary text-white ripple-primary'
                    )}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoriesList;
