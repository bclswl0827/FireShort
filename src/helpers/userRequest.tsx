import axios, { AxiosResponse, AxiosError } from "axios";

interface Params {
    method: "get" | "post" | "put" | "delete" | "patch";
    url: string;
    params?: any;
    data?: any;
    timeout?: number;
}

const userRequest = ({
    method,
    url,
    data,
    params,
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
            return res;
        },
        (err: AxiosError) => {
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
