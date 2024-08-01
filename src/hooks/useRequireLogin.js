import { useCookies } from "react-cookie";

const useRequireLogin = () => {
    const [cookies] = useCookies();

    if(cookies.auth && cookies.auth != undefined && cookies.auth != null) {
        return;
    }

    window.location.replace('./login');
}

export default useRequireLogin;