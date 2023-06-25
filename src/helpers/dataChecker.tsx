interface Error {
    readonly error: boolean;
    readonly message: string;
}

const isURLValid = (url: string): Error => {
    const urlReg = /^((https|http|ftp)?:\/\/)[^\s]+/;
    const result = urlReg.test(url) && url.length <= 255;
    return {
        error: !result,
        message: !result
            ? "链接内容不合法，请检查是内容否以 http:// 或 https:// 开头，或长度是否超过 512 个字符"
            : "",
    };
};

const isSlugValid = (slug: string): Error => {
    const slugReg = /^[a-zA-Z0-9-_]+$/;
    const result =
        (slugReg.test(slug) && slug.length >= 4 && slug.length <= 10) ||
        slug.length === 0;
    return {
        error: !result,
        message: !result
            ? "短链不合法，请检查内容是否存在特殊字符，长度是否少于 4 个或超过 10 个字符"
            : "",
    };
};

const isRemarkValid = (remark: string): Error => {
    const result = remark.length <= 100;
    return {
        error: !result,
        message: !result ? "备注不合法，请缩短备注长度至 100 个字符以内" : "",
    };
};

export { isURLValid, isSlugValid, isRemarkValid };
