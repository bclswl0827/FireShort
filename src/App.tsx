import { Suspense, Component, cloneElement, lazy, ReactElement } from "react";
import {
    HashRouter,
    BrowserRouter,
    Routes as Switch,
    Route,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Spinner from "./components/Spinner";
import withRouter from "./helpers/withRouter";
import AppConfig from "./config";
import getUserInfo from "./helpers/getUserInfo";
import { setLocalStorage } from "./helpers/localStorage";

const Home = lazy(() => import("./views/Home"));
const Link = lazy(() => import("./views/Link"));

const RouteModule = (props: any) => {
    const { location, history } = props;

    return (
        <TransitionGroup
            component="div"
            style={{ position: "releative" }}
            childFactory={(
                child: ReactElement<{ classNames: string }, string>
            ) =>
                cloneElement(child, {
                    classNames:
                        history.action === "PUSH" ? "app-push" : "app-pop",
                })
            }
        >
            <CSSTransition
                timeout={AppConfig.animation.transition}
                key={location.pathname}
                unmountOnExit
            >
                <Switch location={location}>
                    <Route element={<Home />} path="/" />
                    <Route element={<Link />} path="*" />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default class AppLayout extends Component {
    componentDidMount = () => {
        // Add description for SEO
        const meta = document.createElement("meta");
        meta.name = `description`;
        meta.content = AppConfig.site.description;
        document.head.appendChild(meta);
        // Init localStorage
        setLocalStorage("userInfo", {
            ua: navigator.userAgent,
            country: "Unknown",
            ip: "0.0.0.0",
        });
        // Query user info from API
        getUserInfo().then((res) => setLocalStorage("userInfo", res));
    };

    render() {
        const { router } = AppConfig.app;
        const Routes = withRouter(RouteModule);

        if (router === "hash" || router === "redirect") {
            return (
                <HashRouter>
                    <Suspense fallback={<Spinner />}>
                        <Routes />
                    </Suspense>
                </HashRouter>
            );
        }

        return (
            <BrowserRouter>
                <Suspense fallback={<Spinner />}>
                    <Routes />
                </Suspense>
            </BrowserRouter>
        );
    }
}
