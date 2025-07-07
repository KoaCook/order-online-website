import { create } from 'zustand';

// Zustand store for managing notifications
const useNotifications = create(set => ({
    notifications: [],

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
