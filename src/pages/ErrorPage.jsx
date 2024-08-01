import { useRouteError } from "react-router-dom";

const ErrorPage = ({ error = null }) => {
  let routerError = useRouteError();

  if (error != null) {
    routerError = error;
  }

  console.error(routerError);
  return (
    <div
      id="error-page"
      className="card p-4 m-4 position-absolute top-50 start-50 translate-middle w-50 text-center"
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{routerError.statusText || routerError.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
