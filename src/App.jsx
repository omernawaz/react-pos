import Home from "./components/Home";
import LoginPage from "./components/auth/LoginPage";
import { useCookies } from "react-cookie";
import { useState } from "react";

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies("auth");
  const [isLoggedIn, setIsLoggedIn] = useState(cookies.auth != undefined);

  function handleLogin(token) {
    setCookie("auth", token, {
      path: "/",
      maxAge: 24 * 60 * 60,
      sameSite: "strict",
    });
    setIsLoggedIn(true);
  }

  function handleLogout() {
    removeCookie("auth");
    setIsLoggedIn(false);
  }

  if (isLoggedIn) {
    return <Home cookies={cookies} onLogout={handleLogout} />;
  }
  return <LoginPage onLogin={handleLogin} />;
};

export default App;
