import { useCookies } from "react-cookie";

const useUserSession = () => {
    const [, setCookie, removeCookie] = useCookies();

    const handleLogin = (token) => {
        setCookie('auth', token);
        window.location.replace('./');
    }

    const handleLogout = () => {
        removeCookie('auth');
        window.location.replace('./');
    }

    return [handleLogin, handleLogout];
}

export default useUserSession;

