import userRequest from "./userRequest";
import { Result as UserInfo } from "./getUserInfo";

interface Params {
    slug: string;
    firebase: string;
}

interface Result {
    remark: string | "";
    url: string | "";
    slug: string | "";
    user: UserInfo;
    timestamp: number | -1;
}

const getShortLink = async ({ slug, firebase }: Params): Promise<Result> => {
    const dbURL = `${firebase}/shorts/${slug}.json`;

    const res = await userRequest({
        method: "get",
        slient: true,
        url: dbURL,
    });
    if (res.data === null) {
        return Promise.reject("查无此短链");
    }

    const { remark, url, timestamp, user } = res.data;
    return {
        timestamp: timestamp,
        remark: remark,
        url: url,
        slug: slug,
        user: user,
    };
};

export default getShortLink;
