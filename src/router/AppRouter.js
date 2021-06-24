import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/header/Header";
import MainPage from "../components/mainpage/MainPage";
import Detail from "../components/detail/Detail";
import Checkout from "../components/checkout/Checkout";
import Footer from "../components/footer/Footer";
import { auth } from "../firebase/firebase";

const AppRouter = () => {
  console.log(auth);
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={MainPage} exact={true} />
        <Route path="/detail" component={Detail} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
