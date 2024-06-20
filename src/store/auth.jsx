import { React, createContext, useState, useContext, useEffect, useCallback } from 'react'
// Auth => Authentication مصادقة

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [Token, setToken] = useState(null)
    const [role, setRole] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const logoutTimeoutDuration = 900000; // 15 miniate in milliseconds
    let logoutTimer;


    const initializeAuthState = useCallback(() => {
        const token = localStorage.getItem('authToken');
        const storedUser = localStorage.getItem('userName');
        const Role = localStorage.getItem("role");
        if (token && storedUser && Role) {
            setIsAuthenticated(true);
            setUser(storedUser);
            setToken(token);
            setRole(Role);
            resetLogoutTimer(); // Reset the timer when initializing auth state
        } else {
            setIsAuthenticated(false);
        }
    }, []);



    const login1 = (token, user, role) => {
        localStorage.setItem('authToken', token);
        localStorage.setItem('userName', user);
        localStorage.setItem("role", role);
        setIsAuthenticated(true);
        setUser(user);
        setToken(token);
        setRole(role);
        resetLogoutTimer(); // Reset the timer on login
    };
    const logout = () => {

        localStorage.removeItem('authToken');
        localStorage.removeItem('userName');
        localStorage.removeItem('role');
        localStorage.clear();
        setIsAuthenticated(false);
        setUser(null);
        setToken(null);
        setRole(null);
        if (logoutTimer) {
            clearTimeout(logoutTimer);
        }
    }
    const resetLogoutTimer = () => {
        if (logoutTimer) {
            clearTimeout(logoutTimer);
        }
        logoutTimer = setTimeout(logout, logoutTimeoutDuration);
    };


    useEffect(() => {
        initializeAuthState();

        // Set up event listeners for user activity
        const handleActivity = () => {
            // console.log("User activity detected, resetting logout timer"); // Debug log
            resetLogoutTimer();
        };

        window.addEventListener('mousemove', handleActivity);
        window.addEventListener('keypress', handleActivity);

        return () => {
            window.removeEventListener('mousemove', handleActivity);
            window.removeEventListener('keypress', handleActivity);
        };
    }, [initializeAuthState]);




    if (isAuthenticated === null) {
        // Show a loading spinner or some loading UI
        return <div>Loading...</div>;
    }


    return (
        <AuthContext.Provider value={{ logout, login1, isAuthenticated, user, Token, role }}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => {
    return useContext(AuthContext)
} 
