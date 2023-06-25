import { Component } from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppConfig from "../config";
import Area from "../components/Area";
import getShortLink from "../helpers/getShortLink";
import Modal from "../components/Modal";
import parseTimestamp from "../helpers/parseTimestamp";
import { confirmAlert, errorAlert, timerAlert } from "../helpers/swalPopups";
import removeShortLink from "../helpers/removeShortLink";
import CheckIcon from "../assets/check-color.svg";
import CrossIcon from "../assets/cross-color.svg";

interface State {
    readonly exists: boolean;
    readonly time: string;
    readonly url: string;
    readonly remark: string;
    readonly slug: string;
}

export default class Link extends Component<{}, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            slug: "",
            exists: true,
            time: "正在获取中",
            url: "正在获取中",
            remark: "正在获取中",
        };
    }

    async componentDidMount(): Promise<void> {
        const { router, firebase } = AppConfig.app;
        const slug =
            router === "hash" || router === "redirect"
                ? window.location.hash.replace("#/", "")
                : window.location.pathname.replace("/", "");

        try {
            const res = await getShortLink({
                slug: slug,
                firebase: firebase,
            });

            let { timestamp, url, remark } = res;
            if (remark.length === 0) {
                remark = "创建者没有留下备注";
            } else {
                remark = `创建者说：${remark}`;
            }

            this.setState({
                url: url,
                slug: slug,
                exists: true,
                remark: remark,
                time: parseTimestamp(timestamp),
            });
        } catch {
            this.setState({
                exists: false,
                remark: "无相关备注",
                time: "时间不存在",
                url: "网址不存在",
            });
        }
    }

    handleRedirection(url: string): void {
        window.location.href = url;
    }

    async handleRemove(slug: string, firebase: string): Promise<void> {
        const { notification } = AppConfig.animation;

        try {
            const res = await confirmAlert({
                title: "确认删除",
                html: "您确定要删除该短链吗？此操作无法撤消！",
                confirmButtonText: "删除",
                cancelButtonText: "取消",
            });
            if (res.isConfirmed) {
                timerAlert({
                    title: "正在删除",
                    html: "正在删除该短链，请稍候",
                    timer: notification,
                    loading: true,
                    callback: () => (window.location.href = "/"),
                });
                await removeShortLink({
                    slug: slug,
                    firebase: firebase,
                });
                timerAlert({
                    title: "删除成功",
                    html: "该短链已被删除，即将返回首页",
                    timer: notification,
                    loading: true,
                    callback: () => (window.location.href = "/"),
                });
            }
        } catch {
            errorAlert({
                title: "删除失败",
                html: "该短链未被删除",
            });
        }
    }

    render() {
        const { firebase } = AppConfig.app;
        const { name, copyright } = AppConfig.site;
        const { url, remark, time, slug, exists } = this.state;
        document.title = `即将跳转 | ${name}`;

        return (
            <Container>
                <Header>{name}</Header>
                <Area>
                    <Modal
                        title={exists ? "即将执行跳转" : "链接不存在"}
                        lists={[
                            {
                                icon: exists ? CheckIcon : CrossIcon,
                                text: remark,
                            },
                            {
                                icon: exists ? CheckIcon : CrossIcon,
                                text: `链接创建于：${time}`,
                            },
                            {
                                icon: exists ? CheckIcon : CrossIcon,
                                text: `原网址位于：${url}`,
                            },
                        ]}
                        buttons={
                            exists
                                ? [
                                      {
                                          label: "前往该网址",
                                          onClick: () =>
                                              this.handleRedirection(url),
                                      },
                                      {
                                          label: "删除该短链",
                                          onClick: () =>
                                              this.handleRemove(slug, firebase),
                                      },
                                  ]
                                : [
                                      {
                                          label: "回到首页",
                                          onClick: () =>
                                              this.handleRedirection("/"),
                                      },
                                  ]
                        }
                    />
                </Area>
                <Footer>{copyright}</Footer>
            </Container>
        );
    }
}
