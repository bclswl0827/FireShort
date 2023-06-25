import { Component, FormEvent } from "react";

interface Props {
    readonly label: string;
    readonly icon: string;
    readonly type: string;
    readonly placeholder?: string;
    readonly onInput?: (e: FormEvent<HTMLInputElement>) => void;
}

export default class Input extends Component<Props> {
    render() {
        const id = `input-${Math.random().toString(36).substring(2, 15)}`;
        const { label, icon, type, placeholder, onInput } = this.props;

        return (
            <>
                <label
                    htmlFor={id}
                    className="block mb-2 text-sm font-medium text-white"
                >
                    {label}
                </label>
                <div className="relative mb-6">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <img src={icon} alt="" className="w-5 h-5" />
                    </div>
                    <input
                        id={id}
                        type={type}
                        className="border text-sm rounded-sm block w-full pl-10 p-2.5"
                        placeholder={placeholder}
                        onInput={onInput}
                    />
                </div>
            </>
        );
    }
}
