function formatDate(dateString) {
    let parsedDate = new Date(Date.parse(dateString));
    return parsedDate.toLocaleString();
}

export { formatDate };
