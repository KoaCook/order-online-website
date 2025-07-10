'use client';

import { Search as SearchIcon } from 'react-feather';
import React, { useRef } from 'react';

const Search = () => {
    const inputRef = useRef();

    const handleFocusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div
            className="flex items-center border border-solid border-[#dbdbdb] dark:border-[#292929] dark:bg-lightDark  bg-white px-2.5 h-12 rounded-lg text-[#707070] cursor-text focus-within:text-primary dark:text-[#707070]"
            onClick={handleFocusInput}
        >
            <div className="px-2">
                <SearchIcon size={16} className="text-current" />
            </div>
            <input
                ref={inputRef}
                type="text"
                placeholder="Tìm kiếm sản phẩm"
                className="ml-1 py-2 h-8 text-sm font-light outline-none text-black caret-primary bg-transparent dark:text-white"
            />
        </div>
    );
};

export default Search;
