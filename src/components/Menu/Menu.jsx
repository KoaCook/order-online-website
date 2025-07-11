import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

const Menu = ({ closeOnClick, animation, anchor, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const menuRef = useRef(null);

    // Toggle menu visibility
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Handle item click to close menu if closeOnClick is true
    const handleItemClick = () => {
        if (closeOnClick) {
            setIsOpen(false);
        }
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = event => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setVisible(true);
        } else {
            document.body.style = '';
            setTimeout(() => {
                setVisible(false);
            }, [200]);
        }
    }, [isOpen]);

    return (
        <div className="relative block" ref={menuRef}>
            {/* Anchor element */}
            <div onClick={toggleMenu}>{anchor}</div>

            {/* Menu items */}
            <div
                onClick={handleItemClick}
                className={clsx(
                    'transition-opacity duration-200 ease-ease',
                    animation === 'fade' && isOpen && 'opacity-1',
                    animation === 'fade' && !isOpen && 'opacity-0',
                )}
            >
                {visible && children}
            </div>
        </div>
    );
};

export default Menu;
