import { Component, ReactNode } from "react";

interface Props {
    readonly children: ReactNode;
}

export default class Area extends Component<Props> {
    render() {
        const { children } = this.props;

        return (
            <div className="flex-grow text-2xl p-8">{children}</div>
        );
    }
}
