// 前端站点配置
let appConfig = {
    domain: window.location.host, // 站点域名
    title: "Fire Short 短链接生成工具", // 站点标题
    name: "Fire Short", // 站点名称
    copyright: "I BCL.", // 版权资讯
    description: "Serveless 短链接生成工具，纯前端实现，依赖于 Firebase", // 站点描述
    firebase:
        "https://short-url-7030b-default-rtdb.asia-southeast1.firebasedatabase.app", // Firebase 实时数据库地址
    animation: {
        transition: 500, // 转场动画时长
        notification: 1000, // 通知动画时长
    },
    router: "hash", // hash 或者 history
};

export default appConfig;
