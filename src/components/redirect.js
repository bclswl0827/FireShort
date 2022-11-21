// 重定向到任意链接
const redirectRouter = (to, replace) => {
    if (replace) {
        window.location.hash.includes("#/")
            ? window.location.replace("#" + to)
            : window.location.replace(to);
    } else {
        window.location.hash.includes("#/")
            ? (window.location.href = "#" + to)
            : (window.location.href = to);
    }
};

export default redirectRouter;
