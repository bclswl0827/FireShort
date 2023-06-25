const AppConfig = {
    site: {
        // 站点标题
        title: "Fire Short 短链接生成工具",
        // 站点名字
        name: "Fire Short",
        // 站点描述
        description: "基于 Firebase 的 Serveless 纯前端短链接生成工具",
        // 站点版权
        copyright: "I BCL.",
    },
    app: {
        // hash、browser、redirect
        router: "hash",
        // Firebase 实时数据库地址
        firebase:
            "https://short-url-7030b-default-rtdb.asia-southeast1.firebasedatabase.app",
    },
    animation: {
        // 转场动画时长
        transition: 500,
        // 通知动画时长
        notification: 1000,
    },
};

export default AppConfig;
