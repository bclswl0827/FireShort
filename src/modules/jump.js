import { Component } from "react";
import AppFooter from "../components/widgets/footer";
import { getUrl, removeUrl } from "../components/url";
import Swal, { appNotify } from "../components/widgets/swal";
import AppHeader from "../components/widgets/header";
import redirectRouter from "../components/redirect";
import timeToString from "../components/time";
import appConfig from "../config";

export default class AppJump extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exists: true,
            time: "正在获取中",
            url: "正在获取中",
            comment: "正在获取中",
            slug:
                appConfig.router === "hash"
                    ? window.location.hash.replace("#/", "")
                    : window.location.pathname.replace("/", ""),
        };
        this.revokeUrl = this.revokeUrl.bind(this);
    }

    // 获取短网址信息
    componentDidMount = () => {
        document.title = "跳转确认页";
        getUrl(this.state.slug)
            .then((res) => {
                this.setState(
                    Object.assign(this.state, {
                        time: timeToString(res.data.time),
                        comment:
                            res.data.comment !== ""
                                ? res.data.comment
                                : "创建者没有留下备注",
                        url: res.data.url,
                    })
                );
            })
            .catch(() => {
                this.setState({ exists: false });
                setTimeout(() => {
                    redirectRouter("/", false);
                }, appConfig.animation.transition * 4);
            });
    };

    // 删除指定链接
    revokeUrl = (slug) => {
        Swal.fire({
            icon: "question",
            title: "提示",
            text: "确认要删除这则短链接吗？",
            showLoaderOnConfirm: true,
            showCancelButton: true,
            preConfirm: async () => {
                removeUrl(slug);
                appNotify
                    .alert("success", "成功", "短链接已删除，点击确认返回首页")
                    .then((res) => {
                        if (res.isConfirmed) {
                            redirectRouter("/", false);
                        }
                    });
            },
            allowOutsideClick: () => !Swal.isLoading(),
        });
    };

    render() {
        return (
            <div className="overflow-scroll bg-gradient-to-br from-gray-600 via-gray-800 to-black text-white flex flex-col gap-8 h-screen justify-center items-center text-center">
                <AppHeader
                    content={this.state.exists ? "即将跳转" : "短链接不存在"}
                />
                {this.state.exists ? (
                    <div className="flex flex-col gap-4">
                        <ul className="max-w-md cursor-default">
                            <li className="text-gray-500 font-bold">
                                {this.state.url}
                            </li>
                            <li>
                                备注：
                                <strong>{this.state.comment}</strong>
                            </li>
                            <li>
                                创建于：<strong>{this.state.time}</strong>
                            </li>
                        </ul>
                        <button
                            className="py-2"
                            onClick={() => {
                                window.location.href = this.state.url;
                            }}
                        >
                            前往链接
                        </button>
                        <button
                            className="py-2"
                            onClick={() => {
                                this.revokeUrl(this.state.slug);
                            }}
                        >
                            删除链接
                        </button>
                    </div>
                ) : null}
                <AppFooter />
            </div>
        );
    }
}
