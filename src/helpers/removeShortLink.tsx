import userRequest from "./userRequest";

interface Params {
    slug: string;
    firebase: string;
}

const removeShortLink = async ({ slug, firebase }: Params): Promise<string> => {
    const dbURL = `${firebase}/shorts/${slug}.json`;
    const res = await userRequest({
        method: "delete",
        url: dbURL,
    });

    if (res.status !== 200) {
        return Promise.reject("短链删除接失败");
    }

    return slug;
};

export default removeShortLink;
