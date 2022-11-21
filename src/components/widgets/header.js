import React, { Component } from "react";

export default class AppHeader extends Component {
    render() {
        return <h1 className="text-4xl animate-pulse">{this.props.content}</h1>;
    }
}
