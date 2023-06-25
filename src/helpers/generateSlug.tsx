const generateSlug = (): string => {
    return Math.random()
        .toString(36)
        .slice(-4);
};

export default generateSlug;
