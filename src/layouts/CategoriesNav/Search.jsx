'use client';

import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { Search as SearchIcon } from 'react-feather';

const Search = ({ onSearch }) => {
    const inputRef = useRef();
    const [searchValue, setSearchValue] = useState('');
    const router = useRouter();

    const handleFocusInput = () => {
        inputRef.current.focus();
    };

    const handleInputChange = e => {
        setSearchValue(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const query = searchValue.trim();
        // Clear all query params, only set search if present
        const params = new URLSearchParams();
        if (query) {
            params.set('search', query);
        }
        router.replace(`?${params.toString()}`, { scroll: false });

        if (onSearch) {
            onSearch(query);
        }
    };

    return (
        <form
            className="flex items-center border border-solid border-[#dbdbdb] dark:border-[#292929] dark:bg-lightDark bg-white px-2.5 h-12 rounded-lg text-[#707070] cursor-text focus-within:text-primary dark:text-[#707070] relative"
            onClick={handleFocusInput}
            onSubmit={handleSubmit}
            autoComplete="off"
        >
            <div className="px-2">
                <SearchIcon size={16} className="text-current" />
            </div>
            <input
                ref={inputRef}
                type="text"
                value={searchValue}
                onChange={handleInputChange}
                placeholder="Tìm kiếm sản phẩm"
                className="ml-1 py-2 h-8 text-sm font-light outline-none text-black caret-primary bg-transparent dark:text-white flex-1"
            />
        </form>
    );
};

export default Search;
