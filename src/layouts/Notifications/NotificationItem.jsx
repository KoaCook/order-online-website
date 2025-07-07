import useNotifications from '@/stores/useNotifications';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { XCircle } from 'react-feather';

const typeStyles = {
    info: 'bg-white text-black',
    success: 'bg-green-100 text-green-800',
    error: 'bg-red-100 text-red-800',
    warning: 'bg-yellow-100 text-yellow-800',
};

const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
};

const NotificationItem = ({ id, title, message, type = 'info' }) => {
    const removeNotification = useNotifications(state => state.removeNotification);

    const handleClose = () => {
        removeNotification(id);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            handleClose();
        }, 2000);
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <motion.div
            key={id}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeVariants}
            transition={{ duration: 0.35 }}
            className={`relative flex items-start p-5 rounded-md shadow-xl mb-2 w-[344px] ${
                typeStyles[type] || typeStyles.info
            }`}
        >
            <div className="flex-1">
                {title && <div className="font-semibold mb-1 uppercase">{title}</div>}
                <span>{message}</span>
            </div>

            <button
                className="ml-2 text-lg font-bold absolute right-4 top-4"
                onClick={handleClose}
                aria-label="Close"
            >
                <XCircle size={20} />
            </button>
        </motion.div>
    );
};

export default NotificationItem;
