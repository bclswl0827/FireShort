import Swal, {
    SweetAlertInput,
    SweetAlertOptions,
    SweetAlertResult,
} from "sweetalert2";

const successAlert = ({
    title,
    html,
}: {
    title: string;
    html: string;
}): Promise<SweetAlertResult<any>> => {
    return Swal.fire({
        title: title,
        html: html,
        icon: "success",
        confirmButtonText: "OK",
        allowOutsideClick: false,
    });
};

const errorAlert = ({
    title,
    html,
}: {
    title: string;
    html: string;
}): Promise<SweetAlertResult<any>> => {
    return Swal.fire({
        title: title,
        html: html,
        icon: "error",
        confirmButtonText: "OK",
        allowOutsideClick: false,
    });
};

const warningAlert = ({
    title,
    html,
}: {
    title: string;
    html: string;
}): Promise<SweetAlertResult<any>> => {
    return Swal.fire({
        title: title,
        html: html,
        icon: "warning",
        confirmButtonText: "OK",
        showCancelButton: true,
        cancelButtonText: "Cancel",
        allowOutsideClick: false,
    });
};

const infoAlert = ({
    title,
    html,
    width,
}: {
    title: string;
    html: string;
    width?: number | string;
}): Promise<SweetAlertResult<any>> => {
    return Swal.fire({
        title: title,
        html: html,
        width: width,
        icon: "info",
        confirmButtonText: "OK",
        allowOutsideClick: false,
    });
};

const confirmAlert = async ({
    title,
    html,
    confirmButtonText,
    cancelButtonText,
    callback,
}: {
    title: string;
    html: string;
    confirmButtonText: string;
    cancelButtonText?: string;
    callback?: () => void;
}): Promise<SweetAlertResult<any>> => {
    const result = await Swal.fire({
        title: title,
        html: html,
        icon: "warning",
        showCancelButton: cancelButtonText ? true : false,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        allowOutsideClick: false,
        cancelButtonText: cancelButtonText,
        confirmButtonText: confirmButtonText,
    });
    if (result.value) {
        callback && callback();
    }
    return result;
};

const timerAlert = async ({
    title,
    html,
    timer,
    loading,
    callback,
}: {
    title: string;
    html: string;
    timer: number;
    loading: boolean;
    callback?: () => void;
}): Promise<SweetAlertResult<any>> => {
    let timerInterval: number;
    return await Swal.fire({
        title: title,
        html: html,
        timer: timer,
        timerProgressBar: true,
        allowOutsideClick: false,
        showConfirmButton: false,
        didOpen: () => {
            loading && Swal.showLoading();
        },
        willClose: () => {
            clearInterval(timerInterval);
        },
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            callback && callback();
        }
        return result;
    });
};

const toastAlert = ({
    title,
    html,
    icon,
    timer,
}: {
    title: string;
    html: string;
    icon: "success" | "error" | "warning" | "info";
    timer: number;
}): Promise<SweetAlertResult<any>> => {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        timer: timer,
        timerProgressBar: true,
        showConfirmButton: false,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    });
    return Toast.fire({
        icon: icon,
        title: title,
        html: html,
    });
};

const selectAlert = async ({
    title,
    html,
    inputOptions,
    callback,
}: {
    title: string;
    html: string;
    inputOptions: SweetAlertOptions;
    callback?: (value: any) => void;
}): Promise<SweetAlertResult<any>> => {
    const result = await Swal.fire({
        title: title,
        html: html,
        input: "select",
        inputOptions: inputOptions,
        inputPlaceholder: "请选择",
        confirmButtonText: "OK",
        showCancelButton: false,
        allowOutsideClick: false,
        inputValidator: (value: string) => {
            if (!value) {
                return "请选择有效的选项";
            }

            return null;
        },
    });

    if (result.value && callback) {
        callback(result.value);
    }

    return result;
};

const inputAlert = async ({
    title,
    html,
    input,
    callback,
}: {
    title: string;
    html: string;
    input: SweetAlertInput;
    callback?: (value: string) => void;
}): Promise<SweetAlertResult<any>> => {
    const result = await Swal.fire({
        title: title,
        html: html,
        input: input,
        inputAttributes: {
            autocapitalize: "off",
        },
        confirmButtonText: "OK",
        showCancelButton: false,
        allowOutsideClick: false,
        inputValidator: (value) => {
            if (!value) {
                return "请输入有效的值";
            }

            return null;
        },
    });

    if (result.value && callback) {
        callback(result.value);
    }

    return result;
};

export {
    successAlert,
    errorAlert,
    warningAlert,
    infoAlert,
    confirmAlert,
    timerAlert,
    toastAlert,
    selectAlert,
    inputAlert,
};
