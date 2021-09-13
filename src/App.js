import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./components/style.css";
import Header from "./components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductListing from "./components/productListing";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="shoe-store" component={ProductListing}></Route>
          <Route
            exact
            path="/product/:productId"
            component={ProductDetails}
          ></Route>
          <Route
            exact
            path="/product/:productId/:cartId"
            component={Cart}
          ></Route>
          <Route>404 not found</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
