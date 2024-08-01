import useRequireLogin from "./hooks/useRequireLogin";
import Home from "./pages/Home";
const App = () => {
  useRequireLogin();
  return <Home />;
};

export default App;
