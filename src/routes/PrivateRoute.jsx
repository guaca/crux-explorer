import { useAuthState } from '../firebaseConfig';

const PrivateRoute = ({ component: Component }) => {
    const { isAuthenticated } = useAuthState();
    return isAuthenticated && <Component />
};

export default PrivateRoute;