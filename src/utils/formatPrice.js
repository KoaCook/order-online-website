/**
 * Formats a number as a price string with dot as thousands separator.
 * Example: 25000 => "25.000"
 * @param {number|string} price
 * @returns {string}
 */
const formatPrice = price => {
    if (typeof price === 'string') {
        price = parseInt(price, 10);
    }
    if (isNaN(price)) return '';
    return price.toLocaleString('vi-VN');
};

export default formatPrice;
