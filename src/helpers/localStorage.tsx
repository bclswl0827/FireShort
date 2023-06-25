const getLocalStorage = <T,>(key: string): T | null => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
};

const setLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const removeLocalStorage = (key: string) => {
    localStorage.removeItem(key);
};

const clearLocalStorage = () => {
    localStorage.clear();
};

export {
    getLocalStorage,
    setLocalStorage,
    removeLocalStorage,
    clearLocalStorage,
};
