const orderApi = {
    async submitOrder(details) {
        const url = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/orders/order-online-system/new-order`;
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(details),
        }).then(res => {
            if (!res.ok) throw new Error('Order failed');
            return res.json();
        });
    },

    async submitReservation(details) {
        const url = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/orders/order-online-system/new-reservation`;
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(details),
        }).then(res => {
            if (!res.ok) throw new Error('Reservation failed');
            return res.json();
        });
    },

    getOrdersHistory(phone) {
        const url = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/orders/order-online-system/order-history?phone=${phone}`;
        return fetch(url).then(res => {
            if (!res.ok) throw new Error('Get orders failed');
            return res.json();
        });
    },
};

export default orderApi;
