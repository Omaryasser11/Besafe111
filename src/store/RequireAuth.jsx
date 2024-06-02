import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from "./auth";

const RequireAuth = ({ children }) => { // Capitalized 'children'
    const { isAuthenticated } = useAuth();
    const location = useLocation();

    // if (!auth.user && auth.isAuthenticated === false) {
    //     return <Navigate to="/login" state={{ path: location.pathname }} />; // Return the Navigate component
    // }

    // return children; // Capitalized 'children'
    // if (!isAuthenticated) {
    //     // Redirect to login page and save the current location to redirect back after login
    //     return <Navigate to="/login" state={{ from: location }} replace />;
    // }
    if (isAuthenticated === false) {
        // Redirect to login page and save the current location to redirect back after login
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
      if (isAuthenticated === null) {
        // Optionally show a loading spinner or some loading UI
        return <div>Loading...</div>;
      }

    return children;
};


export default RequireAuth;
