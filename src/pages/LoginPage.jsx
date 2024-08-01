import LoginForm from "../components/auth/LoginForm";
import useUserSession from "../hooks/useUserSession";
import useAuth from "../hooks/useAuth";
import Alert from "../components/generic/Alert";
import { useEffect } from "react";

const LoginPage = () => {
  //useRequireLogin();
  const [handleLogin] = useUserSession();
  const [data, isLoading, error, handleAuth] = useAuth();

  useEffect(() => {
    if (!isLoading && data) {
      console.log(data);
      handleLogin(data.token);
    }
  }, [isLoading, data]);

  useEffect(() => {
    if (error) {
    }
  }, [error]);

  return (
    <>
      {error != null && (
        <Alert
          alertType={"danger"}
          alertTitle={error.name}
          alertMessage={error.message}
        />
      )}
      <div className="card p-4 m-4 position-absolute top-50 start-50 translate-middle w-50">
        <h2 className="text-center">Login to FakeStore POS</h2>
        <LoginForm onSubmit={handleAuth} />
      </div>
    </>
  );
};

export default LoginPage;
