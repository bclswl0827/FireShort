import React, { Component } from "react";
import { addUrl } from "../components/url";
import { slugChecker, urlChecker } from "../components/validator";
import Swal, { appNotify } from "../components/widgets/swal";
import AppFooter from "../components/widgets/footer";
import AppHeader from "../components/widgets/header";
import appConfig from "../config";

export default class AppHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "",
            slug: "",
            comment: "",
        };
        this.generateUrl = this.generateUrl.bind(this);
    }

    // 修改页面标题
    componentDidMount = () => {
        document.title = appConfig.title;
    };

    // 请求 Firebase，执行短网址生成
    generateUrl = ({ url, slug, comment }) => {
        if (!urlChecker(url)) {
            appNotify.alert(
                "error",
                "错误",
                "您输入的 URL 格式不正确，请检查后重试"
            );
            return false;
        }
        if (slug === "") {
            slug = Math.random()
                .toString(36)
                .slice(appConfig.slug * -1);
        }
        Swal.fire({
            icon: "question",
            title: "提示",
            text: "您确认要生成短链接吗",
            showLoaderOnConfirm: true,
            showCancelButton: true,
            preConfirm: async () => {
                try {
                    const res = await slugChecker(slug);
                    if (!res.data.available) {
                        Promise.reject(res);
                    }
                    addUrl({ url, slug, comment });
                } catch (err) {
                    appNotify.alert("error", "错误", err.data?.message);
                }
            },
            allowOutsideClick: false,
        });
    };

    render() {
        return (
            <div className="overflow-scroll bg-gradient-to-br from-gray-600 via-gray-800 to-black text-white flex flex-col gap-8 h-screen justify-center items-center">
                <AppHeader content={appConfig.name} />
                <div className="flex flex-col gap-4">
                    <input
                        type="url"
                        className="px-20 py-2"
                        placeholder="待缩短网址（必填）"
                        onChange={(e) => {
                            this.setState({ url: e.target.value });
                        }}
                    />
                    <input
                        type="text"
                        className="py-2"
                        placeholder="自定义短链"
                        onChange={(e) => {
                            this.setState({ slug: e.target.value });
                        }}
                    />
                    <input
                        type="text"
                        className="py-2"
                        placeholder="为链接备注"
                        onChange={(e) => {
                            this.setState({ comment: e.target.value });
                        }}
                    />
                    <button
                        className="py-2"
                        onClick={() => this.generateUrl(this.state)}
                    >
                        缩短链接
                    </button>
                </div>
                <AppFooter />
            </div>
        );
    }
}
