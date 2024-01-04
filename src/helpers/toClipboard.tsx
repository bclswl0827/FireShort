const toClipboard = async (data: string): Promise<void> => {
    const clipboard = navigator.clipboard || {
        writeText: (text) => {
            const copyInput = document.createElement("input");
            copyInput.value = text;
            document.body.appendChild(copyInput);
            copyInput.select();
            document.execCommand("copy");
            document.body.removeChild(copyInput);
        },
    };
    clipboard && (await clipboard.writeText(data));
};

export default toClipboard;
