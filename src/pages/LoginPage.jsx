import LoginForm from "../components/auth/LoginForm";
import useUserSession from "../hooks/useUserSession";
import useAuth from "../hooks/useAuth";
import Alert from "../components/generic/Alert";
import { useEffect } from "react";

const LoginPage = () => {
  const [handleLogin] = useUserSession();
  const [data, isLoading, error, handleAuth] = useAuth();

  useEffect(() => {
    if (!isLoading && data) {
      handleLogin(data.token);
    }
  }, [isLoading, data]);

  return (
    <div className="card p-4 m-4 position-absolute top-50 start-50 translate-middle w-50">
      <h2 className="text-center">Login to FakeStore POS</h2>
      {error != null && (
        <Alert
          alertType={"danger"}
          alertTitle={error.name}
          alertMessage={error.message}
        />
      )}
      <LoginForm onSubmit={handleAuth} />
    </div>
  );
};

export default LoginPage;
