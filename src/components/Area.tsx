import { Component, ReactNode } from "react";

interface Props {
    readonly children: ReactNode;
}

export default class Area extends Component<Props> {
    render() {
        const { children } = this.props;

        return (
            <div className="flex-grow text-2xl p-8 lg:w-1/2 md:w-full">{children}</div>
        );
    }
}
