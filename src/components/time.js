// 时间戳转 YYYY-MM-DD HH:mm
const timeToString = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
};

export default timeToString;
