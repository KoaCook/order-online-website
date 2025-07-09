function formatDate(dateString) {
    const date = new Date(dateString);

    // Add 7 hours (UTC+7)
    const utc7Date = new Date(date.getTime() + 7 * 60 * 60 * 1000);

    const day = String(utc7Date.getUTCDate()).padStart(2, '0');
    const month = String(utc7Date.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = utc7Date.getUTCFullYear();

    return `${day}/${month}/${year}`;
}

export default formatDate;
