import useRequireLogin from "../hooks/useRequireLogin";

function Home() {
  useRequireLogin();
  return (
    <div className="card p-4 m-4 position-absolute top-50 start-50 translate-middle w-50 text-center">
      <h1>FakeStore POS</h1>
      <h3>Home Page</h3>
    </div>
  );
}

export default Home;
