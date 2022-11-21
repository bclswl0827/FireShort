import { useNavigate, useLocation } from "react-router-dom";

// 实现 withRouter
const withRouter = (Component) => (props) => {
    const history = useNavigate();
    const location = useLocation();
    return <Component {...props} history={history} location={location} />;
};

export default withRouter;
