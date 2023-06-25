import { Component, ReactNode } from "react";

interface Props {
    readonly children: ReactNode;
}

export default class Container extends Component<Props> {
    render() {
        const { children } = this.props;

        return (
            <div className="overflow-scroll bg-gradient-to-br from-gray-600 via-gray-800 to-black text-white flex flex-col min-h-screen items-center">
                {children}
            </div>
        );
    }
}
