import Spinner from "./components/spinner";
import Home from "./pages/home.page";

// var LP = require("linkedin-public-profile-parser");

const App = () => {
  // var url = "https://www.linkedin.com/in/shashikant-s-wagh/";
  // LP(url, function (err, data) {
  //   console.log(JSON.stringify(data, null, 2)); // see below for sample output JSON
  // });

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
