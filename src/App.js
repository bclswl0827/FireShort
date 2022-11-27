import React, { Suspense, Component, cloneElement, lazy } from "react";
import {
    HashRouter,
    BrowserRouter,
    Routes as Switch,
    Route,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import AppSpinner from "./components/widgets/spinner";
import withRouter from "./components/hook";
import appConfig from "./config";
import getUserInfo from "./components/user";

// 主页 Lazy Loading
const AppHome = lazy(() => {
    return new Promise((resolve) => {
        setTimeout(
            () => resolve(import("./modules/home")),
            appConfig.animation.transition
        );
    });
});

// 短链接 Lazy Loading
const AppJump = lazy(() => {
    return new Promise((resolve) => {
        setTimeout(
            () => resolve(import("./modules/jump")),
            appConfig.animation.transition
        );
    });
});

// 设定路由和转场动画
const RouteModule = (props) => {
    return (
        <TransitionGroup
            style={{ position: "releative" }}
            childFactory={(child) =>
                cloneElement(child, {
                    classNames:
                        props.history.action === "PUSH"
                            ? "app-push"
                            : "app-pop",
                })
            }
        >
            <CSSTransition
                timeout={appConfig.animation.transition}
                key={props.location.pathname}
                unmountOnExit
            >
                <Switch location={props.location}>
                    <Route element={<AppHome />} path="/" />
                    <Route element={<AppJump />} path="*" />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    );
};

// 设定前端整体布局
export default class AppLayout extends Component {
    componentDidMount = () => {
        getUserInfo();
    };

    render() {
        // 将 history、location、match 丢进组件属性中
        const Routes = withRouter(RouteModule);

        if (appConfig.router === "hash" || appConfig.router === "redirect") {
            return (
                <HashRouter>
                    <Suspense fallback={<AppSpinner />}>
                        <Routes />
                    </Suspense>
                </HashRouter>
            );
        }

        return (
            <BrowserRouter>
                <Suspense fallback={<AppSpinner />}>
                    <Routes />
                </Suspense>
            </BrowserRouter>
        );
    }
}
