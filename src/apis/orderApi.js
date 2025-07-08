const orderApi = {
    submitOrder(details) {
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
};

export default orderApi;
