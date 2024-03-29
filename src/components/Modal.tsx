import { Component } from "react";

export interface Button {
    readonly label: string;
    readonly onClick: () => void;
}

export interface List {
    readonly icon: string;
    readonly text: string;
}

interface Props {
    readonly title: string;
    readonly lists: List[];
    readonly buttons: Button[];
}

export default class Modal extends Component<Props> {
    render() {
        const { title, lists, buttons } = this.props;

        return (
            <div className="rounded-sm flex justify-center text-center items-center bg-gray-900 shadow-2xl">
                <div className="w-full md:p-12 lg:p-24 p-8 space-y-12">
                    <p className="text-2xl lg:text-3xl font-semibold text-white">
                        {title}
                    </p>
                    <div className="text-base text-left text-gray-200">
                        <ul className="max-w-md space-y-1 text-gray-300 list-inside">
                            {lists.map((item, index) => (
                                <li key={index} className="flex">
                                    <img
                                        src={item.icon}
                                        className="w-5 h-5 mr-2"
                                        alt=""
                                    />
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full mt-2 flex flex-row items-center gap-3">
                        {buttons.map((item, index) => (
                            <button
                                key={index}
                                className="px-4 py-4 text-base text-white rounded-sm flex-grow"
                                onClick={item.onClick}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
