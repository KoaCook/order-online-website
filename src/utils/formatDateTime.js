/**
 * Formats a MySQL/ISO timestamp string to "HH:mm - dd/MM/yyyy"
 * @param {string} timestamp - The ISO timestamp string from MySQL
 * @returns {string} - Formatted date and time string
 */
function formatDateTime(timestamp) {
    if (!timestamp) return '';
    const date = new Date(timestamp);

    // Pad single digits with leading zero
    const pad = n => (n < 10 ? '0' + n : n);

    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const day = pad(date.getDate());
    const month = pad(date.getMonth() + 1); // Months are zero-based
    const year = date.getFullYear();

    return `${hours}:${minutes} - ${day}/${month}/${year}`;
}

export default formatDateTime;
