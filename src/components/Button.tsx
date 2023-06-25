import { Component } from "react";

interface Props {
    readonly children: string;
    readonly icon?: string;
    readonly position?: "left" | "right" | "center";
    readonly fullWidth?: boolean;
    readonly onClick?: () => void;
}

export default class Button extends Component<Props> {
    render() {
        const { children, icon, position, fullWidth, onClick } = this.props;

        return (
            <div
                className={`${position === "left" && `flex justify-start`}
                            ${position === "right" && `flex justify-end`}
                            ${position === "center" && `flex justify-center`}`}
            >
                <button
                    className={`${
                        fullWidth && "w-full"
                    } text-white bg-transparent font-medium rounded-sm text-sm px-5 py-2.5 mt-12 flex gap-2 justify-center`}
                    onClick={onClick}
                >
                    {icon && <img src={icon} alt="" className="w-5 h-5" />}
                    <span className="text-center">{children}</span>
                </button>
            </div>
        );
    }
}
