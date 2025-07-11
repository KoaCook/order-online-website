'use client';

import useNotifications from '@/stores/useNotifications';
import NotificationItem from './NotificationItem';
import { AnimatePresence } from 'framer-motion';

const Notifications = () => {
    const notifications = useNotifications(state => state.notifications);

    return (
        <div className="fixed top-[calc(72px+16px)] right-4 z-50">
            <AnimatePresence>
                {notifications.map(item => (
                    <NotificationItem key={item.id} {...item} />
                ))}
            </AnimatePresence>
        </div>
    );
};

export default Notifications;
