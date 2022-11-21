import appConfig from "../config";
import userRequest from "./request";

// 正则匹配检测 URL 是否符合规范
const urlChecker = (url) => {
    const urlReg = /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/;
    return urlReg.test(url);
};

// 检测自定义 Slug 是否被占用
const slugChecker = async (slug) => {
    const res = await userRequest(
        "get",
        appConfig.firebase + "/shorts/" + slug + ".json",
        { slient: true }
    );
    if (res.data !== null) {
        return Promise.reject(
            Object.assign(res, {
                data: {
                    available: false,
                    message: "此自定义 Slug 被占用",
                },
            })
        );
    }
    return Object.assign(res, {
        data: {
            available: true,
            message: "此自定义 Slug 可用",
        },
    });
};

export { urlChecker, slugChecker };
