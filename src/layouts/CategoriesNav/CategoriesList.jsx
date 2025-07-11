'use client';

import categories from '@/constants/categories';
import clsx from 'clsx';
import { useRef, useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { X } from 'react-feather';

const ALL_CATEGORY = { label: 'Tất cả', slug: '' };

const CategoriesList = () => {
    const scrollRef = useRef(null);
    const categoryRefs = useRef([]);
    const router = useRouter();
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get('search');

    // Read initial category from query param, fallback to ALL_CATEGORY
    const initialCategorySlug = searchParams.get('category') || '';
    const [selectedCategorySlug, setSelectedCategorySlug] = useState(initialCategorySlug);

    // Keep state in sync with query param if it changes externally
    useEffect(() => {
        const currentCategorySlug = searchParams.get('category') || '';
        setSelectedCategorySlug(currentCategorySlug);
    }, [searchParams]);

    // Drag-to-scroll logic
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

    const handleClearSearch = () => {
        const params = new URLSearchParams(Array.from(searchParams.entries()));
        params.delete('search');
        router.replace(`?${params.toString()}`, { scroll: false });
    };

    const handleCategoryClick = (category, index) => {
        setSelectedCategorySlug(category.slug);

        // Update the URL query param
        const params = new URLSearchParams(Array.from(searchParams.entries()));
        if (!category.slug) {
            params.delete('category');
        } else {
            params.set('category', category.slug);
        }
        router.replace(`?${params.toString()}`, { scroll: false });

        // Scroll the clicked category into view
        categoryRefs.current[index].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
        });
    };

    // Compose categories list with "Tất cả" at the start
    const categoriesList = [ALL_CATEGORY, ...categories];

    return (
        <>
            {searchQuery ? (
                <div className="text-base text-black dark:text-white flex items-center">
                    Kết quả tìm kiếm <span className="font-bold ml-1">{searchQuery}</span>
                    <button className="text-primary ml-1 p-1" onClick={handleClearSearch}>
                        <X size={18} />
                    </button>
                </div>
            ) : (
                <div
                    className="flex items-center flex-1 max-w-category-nav overflow-x-scroll no-scrollbar"
                    ref={scrollRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseUpOrLeave}
                    onMouseUp={handleMouseUpOrLeave}
                >
                    {categoriesList.map((category, i) => (
                        <button
                            key={category.slug || 'all'}
                            ref={el => (categoryRefs.current[i] = el)}
                            onClick={() => handleCategoryClick(category, i)}
                            className={clsx(
                                'px-3 sm:px-4 mr-2 rounded-md h-9 sm:h-10 text-xs sm:text-sm font-normal whitespace-nowrap outline-none',
                                category.slug !== selectedCategorySlug &&
                                    'bg-[#f5f5f5] dark:bg-[#272727] dark:text-white text-black ripple-unactive-category-btn',
                                category.slug === selectedCategorySlug &&
                                    'bg-primary text-white ripple-primary',
                            )}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>
            )}
        </>
    );
};

export default CategoriesList;
