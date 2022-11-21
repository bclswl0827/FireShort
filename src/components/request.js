import axios from "axios";
import appConfig from "../config";
import { appNotify } from "./widgets/swal";

// 安静模式开关
let slient = false;
// 创建 Axios 实例
const _axios = axios.create({
    timeout: 10000,
});

// 每个请求加上标头
_axios.interceptors.request.use((config) => {
    try {
        config.headers["Accept"] = "application/json";
    } catch (error) {
        return Promise.reject(error);
    }
    return config;
});

// 响应拦截处理
_axios.interceptors.response.use(
    (res) => {
        if (!slient) {
            appNotify.toast(
                "success",
                "操作成功",
                "您的请求已成功完成，感谢您的使用。",
                "top-end",
                appConfig.animation.notification
            );
        }
        return res;
    },
    (err) => {
        if (!slient) {
            appNotify.toast(
                "error",
                "出现错误",
                err.message,
                "top-end",
                appConfig.animation.notification
            );
        }
    }
);

// 执行自定义请求
const userRequest = (method, url, options) => {
    if (options?.slient) {
        slient = true;
    } else {
        slient = false;
    }
    return _axios.request({
        url: url,
        method: method,
        data: options?.data,
        params: options?.params,
    });
};

export default userRequest;
