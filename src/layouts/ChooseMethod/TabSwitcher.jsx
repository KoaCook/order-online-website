import clsx from 'clsx';
import { useState, useRef, useEffect, memo } from 'react';

const TabSwitcher = ({ tabs, selected, onTabChange }) => {
    const [underlineStyle, setUnderlineStyle] = useState({});
    const tabRefs = useRef([]);

    useEffect(() => {
        if (tabRefs.current[selected]) {
            const node = tabRefs.current[selected];
            setUnderlineStyle({
                left: node.offsetLeft,
                width: node.offsetWidth,
            });
        }
    }, [selected, tabs]);

    return (
        <div className="relative w-full">
            <div className="flex border-b border-gray-200 dark:border-darkDivider justify-center">
                {tabs.map((tab, idx) => (
                    <button
                        key={tab}
                        ref={el => (tabRefs.current[idx] = el)}
                        className={clsx(
                            'relative px-6 py-2 text-sm font-normal transition-colors duration-300 focus:outline-none w-32 h-12',
                            selected === idx ? 'text-primary' : 'text-gray-500 hover:text-primary',
                        )}
                        onClick={() => onTabChange(idx)}
                        type="button"
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <span
                className="absolute bottom-0 h-[2px] bg-primary rounded transition-all duration-300 ease-in-out"
                style={{
                    left: underlineStyle.left || 0,
                    width: underlineStyle.width || 0,
                }}
            />
        </div>
    );
};

export default memo(TabSwitcher);
