import { Component } from "react";

interface Props {
    readonly children: string;
}

export default class Header extends Component<Props> {
    render() {
        const { children } = this.props;

        return (
            <div className="text-4xl flex-grow font-bold w-full text-center p-4">
                {children}
                <hr className="border mt-4" />
            </div>
        );
    }
}
