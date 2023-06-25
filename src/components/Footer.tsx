import { Component } from "react";

interface Props {
    readonly children: string;
}

export default class Footer extends Component<Props> {
    render() {
        const { children } = this.props;

        return (
            <footer className="text-center text-gray-400 m-4">
                <span>
                    {`© ${new Date()
                        .getFullYear()
                        .toString()} ${children} | Powered by `}
                    <a
                        className="underline"
                        href="https://github.com/bclswl0827/FireShort"
                        rel="noreferrer"
                        target="_blank"
                    >
                        Fire Short
                    </a>
                </span>
            </footer>
        );
    }
}
