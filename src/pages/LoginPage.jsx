import { useState } from "react";
import LoginForm from "../components/auth/LoginForm";
import useUserSession from "../hooks/useUserSession";

const LoginPage = () => {
  const [showError, setShowError] = useState(false);
  const [handleLogin] = useUserSession();

  function handleSubmit(formData) {
    let headers = new Headers();
    headers.set("Content-Type", "application/json");

    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        username: formData.get("username"),
        password: formData.get("password"),
      }),
    })
      .then((res) => res.json())
      .then((json) => handleLogin(json.token))
      .catch((error) => {
        console.log(error);
        setShowError(true);
      });
  }

  return (
    <div className="card p-4 m-4 position-absolute top-50 start-50 translate-middle w-50">
      <h2 className="text-center">Login to FakeStore POS</h2>
      {showError && (
        <small style={{ color: "red" }}>Incorrect Username or Password!</small>
      )}
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default LoginPage;
