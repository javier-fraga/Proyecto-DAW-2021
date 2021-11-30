import { Navigate } from "react-router";
import { auth } from "../../Services/firebase";

const PrivateRoute = ({ children })=> {
    let autenticacion = auth.currentUser;
    return ( autenticacion ? children: <Navigate to="/login" />);
}

export default PrivateRoute;