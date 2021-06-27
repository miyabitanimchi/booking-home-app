import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/header/Header";
import MainPage from "../components/mainpage/MainPage";
import SearchResult from "../components/searchResult/SearchResult";
import Detail from "../components/detail/Detail";
import Checkout from "../components/checkout/Checkout";
import Footer from "../components/footer/Footer";

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={MainPage} exact={true} />
      <Route path="/searchresult" component={SearchResult} />
      <Route path="/detail/:id" component={Detail} />
      <Route path="/checkout" component={Checkout} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default AppRouter;
