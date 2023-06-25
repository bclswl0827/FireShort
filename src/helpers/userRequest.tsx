import axios, { AxiosResponse, AxiosError } from "axios";

interface Params {
    method: "get" | "post" | "put" | "delete";
    url: string;
    slient?: boolean;
    params?: any;
    data?: any;
    timeout?: number;
}

const userRequest = ({
    method,
    url,
    data,
    params,
    slient = false,
    timeout = 10000,
}: Params): Promise<AxiosResponse> => {
    const _axios = axios.create({
        timeout: timeout,
    });

    _axios.interceptors.request.use((config: any) => {
        try {
            config.headers["Accept"] = "application/json";
            config.headers["Content-Type"] = "application/json";
        } catch (error) {
            return Promise.reject(error);
        }

        return config;
    });

    _axios.interceptors.response.use(
        (res: AxiosResponse) => {
            slient || alert("您的请求已成功完成，感谢您的使用。");
            return res;
        },
        (err: AxiosError) => {
            slient || alert(err.message);
            return Promise.reject(err);
        }
    );

    return _axios.request({
        url: url,
        method: method,
        data: data,
        params: params,
    });
};

export default userRequest;
