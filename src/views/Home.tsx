import { Component } from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Area from "../components/Area";
import AppConfig from "../config";
import Input from "../components/Input";
import Button from "../components/Button";
import LinkIcon from "../assets/link-solid.svg";
import PencilIcon from "../assets/pencil-solid.svg";
import BookmarkIcon from "../assets/bookmark-regular.svg";
import CheckIcon from "../assets/check-solid.svg";
import { isRemarkValid, isSlugValid, isURLValid } from "../helpers/dataChecker";
import {
    errorAlert,
    successAlert,
    timerAlert,
    toastAlert,
} from "../helpers/swalPopups";
import getShortLink from "../helpers/getShortLink";
import generateSlug from "../helpers/generateSlug";
import addShortLink from "../helpers/addShortLink";
import { getLocalStorage } from "../helpers/localStorage";
import toClipboard from "../helpers/toClipboard";

interface State {
    readonly url: string;
    readonly slug: string;
    readonly remark: string;
}

export default class Home extends Component<{}, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            url: "",
            slug: "",
            remark: "",
        };
    }

    handleSubmit = async (): Promise<void> => {
        const { notification } = AppConfig.animation;
        const { router, firebase } = AppConfig.app;
        let { url, slug, remark } = this.state;

        for (let key of Object.keys(this.state)) {
            let result = { error: false, message: "" };
            switch (key) {
                case "url":
                    result = isURLValid(url);
                    break;
                case "slug":
                    result = isSlugValid(slug);
                    break;
                case "remark":
                    result = isRemarkValid(remark);
                    break;
                default:
                    break;
            }

            if (result.error) {
                errorAlert({
                    title: "发生错误",
                    html: result.message,
                });
                return;
            }
        }

        timerAlert({
            title: "请稍等",
            html: "请稍等片刻，短链接马上创建完成",
            timer: 10000,
            loading: true,
        });
        if (!slug.length) {
            slug = generateSlug();
            this.setState({ slug: slug });
        }

        const baseProtocol = `${window.location.protocol}/`;
        const baseHost = `${window.location.host}`;
        try {
            await getShortLink({
                slug: slug,
                firebase: firebase,
            });
            errorAlert({
                title: "发生错误",
                html: `待创建短链 <a href="${baseProtocol}/${baseHost}${
                    router === "hash" ? "/#" : ""
                }/${slug}" target="_blank" rel="noreferrer">${baseHost}${
                    router === "hash" ? "/#" : ""
                }/${slug}</a> 已存在，请刷新页面或更换自定义短链后重试`,
            });
        } catch {
            try {
                const userInfo = getLocalStorage("userInfo");
                const res = await addShortLink({
                    url: url,
                    slug: slug,
                    remark: remark,
                    firebase: firebase,
                    user: userInfo,
                });
                const fullURL = `${baseProtocol}/${baseHost}${
                    router === "hash" ? "/#" : ""
                }/${res}`;

                this.setState({ slug: generateSlug() });
                await successAlert({
                    title: "创建成功",
                    html: `<a href="${fullURL}" target="_blank" rel="noreferrer">${baseHost}${
                        router === "hash" ? "/#" : ""
                    }/${res}</a><br />点击 OK 复制到剪切板`,
                });
                await toClipboard(fullURL);

                toastAlert({
                    title: "复制成功",
                    html: `链接已经复制到剪贴板，您可以直接粘贴使用`,
                    icon: "info",
                    timer: notification,
                });
            } catch {
                errorAlert({
                    title: "发生错误",
                    html: "短链接创建失败，请稍后重试",
                });
            }
        }
    };

    render() {
        const { title, name, copyright } = AppConfig.site;
        document.title = title;

        return (
            <Container>
                <Header>{name}</Header>
                <Area>
                    <Input
                        label="1. 待缩短链接（必填）"
                        icon={LinkIcon}
                        type="text"
                        placeholder="例如 https://example.com"
                        onInput={(e) =>
                            this.setState({ url: e.currentTarget.value })
                        }
                    />
                    <Input
                        label="2. 自定义短链（可选）"
                        icon={PencilIcon}
                        type="text"
                        placeholder="至少 4 个字符，例如 abcd"
                        onInput={(e) =>
                            this.setState({ slug: e.currentTarget.value })
                        }
                    />
                    <Input
                        label="3. 链接备注（可选）"
                        icon={BookmarkIcon}
                        type="text"
                        placeholder="例如「给女朋友的小惊喜」"
                        onInput={(e) =>
                            this.setState({ remark: e.currentTarget.value })
                        }
                    />
                    <Button
                        fullWidth={true}
                        icon={CheckIcon}
                        onClick={this.handleSubmit}
                    >
                        创建短链接
                    </Button>
                </Area>
                <Footer>{copyright}</Footer>
            </Container>
        );
    }
}
