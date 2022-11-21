import React, { Component } from "react";
import appConfig from "../../config";

export default class AppFooter extends Component {
    render() {
        return (
            <footer className="text-center text-white text-sm">
                &copy; {appConfig.copyright}
            </footer>
        );
    }
}
