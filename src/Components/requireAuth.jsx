import { useLocation,Navigate,Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({allowedRole})=>{
    const {auth} = useAuth();
    const location = useLocation();

    return(
        auth?.roles?.find(role=>allowedRole?.includes(role))
            ?<Outlet/>
            :<Navigate to="/" state={{from:location}} replace/>
    );
}

export default RequireAuth