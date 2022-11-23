import appConfig from "../config";
import userRequest from "./request";
import timeToString from "./time";
import Swal from "./widgets/swal";

// 向 Firebase 执行 PUT 操作
const addUrl = ({ url, slug, comment }) => {
    userRequest(
        "put",
        appConfig.firebase + "/shorts/" + slug + ".json",
        {
            data: {
                url: url,
                slug: slug,
                comment: comment,
                time: Date.now(),
                user:
                    localStorage.getItem("tracker") !== null
                        ? JSON.parse(localStorage.getItem("tracker"))
                        : null,
            },
        },
        { slient: true }
    )
        .then((res) => {
            Swal.fire({
                icon: "success",
                title: "成功",
                html: `<strong><a href="${window.location.protocol}//${
                    appConfig.domain
                }${appConfig.router === "hash" ? "/#/" : ""}${
                    res.data.slug
                }" target="_blank">${appConfig.domain}${
                    appConfig.router === "hash" ? "/#/" : ""
                }${
                    res.data.slug
                }</a></strong><br />您可以用这个链接访问对应网址<br />
                    <i>生成于 ${timeToString(res.data.time)}</i>`,
                allowOutsideClick: false,
            });
        })
        .catch(() => {
            Swal.fire({
                icon: "error",
                title: "失败",
                text: "无法创建短链接，请检查提交的资料，然后重试",
            });
        });
};

// 取得 Firebase 中的短链接数据
const getUrl = async (slug) => {
    const res = await userRequest(
        "get",
        appConfig.firebase + "/shorts/" + slug + ".json",
        {
            slient: true,
        }
    );
    if (res.data !== null) {
        return Promise.resolve(res);
    }
    return await Promise.reject(res);
};

// 移除指定短链接
const removeUrl = async (slug) => {
    const res = await userRequest(
        "delete",
        appConfig.firebase + "/shorts/" + slug + ".json",
        {
            slient: true,
        }
    );
    if (res.data === null) {
        return Promise.resolve(res);
    }
    return await Promise.reject(res);
};

export { addUrl, removeUrl, getUrl };
