import Spinner from "./components/spinner";
import Home from "./pages/home.page";

const App = () => {
  return (
    <>
      <Spinner />
      <div className="site-container">
        <Home />
      </div>
    </>
  );
};

export default App;
