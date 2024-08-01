import useRequireLogin from "../hooks/useRequireLogin";

function Home() {
  useRequireLogin();
  return <div>Home</div>;
}

export default Home;
