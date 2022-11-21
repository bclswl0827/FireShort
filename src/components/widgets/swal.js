import Swal from "sweetalert2";

// 重写 Swal 基本样式
const _Swal = Swal.mixin({
    customClass: {
        confirmButton:
            "btn border rounded py-2 px-8 m-5 text-black bg-white hover:bg-gray-100",
        cancelButton:
            "btn border rounded py-2 px-8 m-5 text-white bg-gray-600 hover:bg-gray-500",
        closeButton: "",
    },
    iconColor: "rgb(31 41 55)",
    background: "rgb(209, 213, 219)",
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    buttonsStyling: false,
});

// 封装 Swal 各类窗口样式
const appNotify = {
    // 弹窗提示
    alert: (icon, title, text) => {
        return _Swal.fire({
            icon: icon,
            title: title,
            text: text,
        });
    },
    // 确认框
    confirm: (icon, title, text) => {
        return _Swal.fire({
            icon: icon,
            title: title,
            text: text,
            showCancelButton: true,
        });
    },
    // 悬浮通知
    toast: (icon, title, text, position, timeout) => {
        return _Swal
            .mixin({
                toast: true,
                position: position,
                timer: timeout,
                timerProgressBar: true,
                showConfirmButton: false,
                didOpen: (toast) => {
                    toast.addEventListener("mouseenter", Swal.stopTimer);
                    toast.addEventListener("mouseleave", Swal.resumeTimer);
                },
            })
            .fire({
                icon: icon,
                title: title,
                text: text,
            });
    },
};

export default _Swal;
export { appNotify };
