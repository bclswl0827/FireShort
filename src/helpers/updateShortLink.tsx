import userRequest from "./userRequest";

interface Params {
    url?: string;
    slug?: string;
    remark?: string;
    firebase: string;
}

const updateShortLink = async ({
    url,
    slug,
    remark,
    firebase,
}: Params): Promise<void> => {
    const dbURL = `${firebase}/shorts/${slug}.json`;
    const res = await userRequest({
        method: "patch",
        url: dbURL,
        data: {
            url: url,
            slug: slug,
            remark: remark,
        },
    });

    if (res.status !== 200) {
        return Promise.reject("短链更新失败");
    }
};

export default updateShortLink;
