import "./App.css";
// components
import HomePage from "./Pages/HomePage/";
import ProductPage from "./Pages/ProductPage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import AboutPage from "./Pages/AboutPage";
// routing
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/products/:catId" component={ProductPage} />
          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
