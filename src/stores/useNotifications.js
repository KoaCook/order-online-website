import { create } from 'zustand';

// Zustand store for managing notifications
const useNotifications = create(set => ({
    notifications: [
        {
            id: Date.now(),
            title: 'THÊM MÓN THÀNH CÔNG',
            message: 'Super Sundae Socolaa x1',
        },
    ],

    addNotification(title, message, type) {
        const id = Date.now();
        set(state => ({
            notifications: [...state.notifications, { id, title, message, type }],
        }));
    },
    removeNotification(id) {
        set(state => ({
            notifications: state.notifications.filter(n => n.id !== id),
        }));
    },
}));

export default useNotifications;
