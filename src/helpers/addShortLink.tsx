import userRequest from "./userRequest";
import { Result as UserInfo } from "./getUserInfo";

interface Params {
    url: string;
    slug: string;
    remark: string;
    firebase: string;
    user: UserInfo | any;
}

const addShortLink = async ({
    url,
    slug,
    remark,
    firebase,
    user,
}: Params): Promise<string> => {
    const dbURL = `${firebase}/shorts/${slug}.json`;
    const res = await userRequest({
        method: "put",
        url: dbURL,
        data: {
            url: url,
            slug: slug,
            remark: remark,
            timestamp: Date.now(),
            user: user,
        },
    });

    if (res.status !== 200) {
        return Promise.reject("短链生成接失败");
    }

    return slug;
};

export default addShortLink;
