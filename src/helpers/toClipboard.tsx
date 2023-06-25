const toClipboard = async (data: string): Promise<void> => {
    await navigator.clipboard.writeText(data);
};

export default toClipboard;