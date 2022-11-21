import userRequest from "./request";

// 取得用户国家、IP、UA
const getUserInfo = () => {
    userRequest("get", "https://ipapi.co/json", { slient: true })
        .then((res) => {
            localStorage.setItem(
                "tracker",
                JSON.stringify({
                    ua: navigator.userAgent,
                    country: res.data.country,
                    ip: res.data.ip,
                })
            );
        })
        .catch(() => {
            localStorage.setItem(
                "tracker",
                JSON.stringify({
                    ua: navigator.userAgent,
                    country: null,
                    ip: null,
                })
            );
        });
};

export default getUserInfo;
