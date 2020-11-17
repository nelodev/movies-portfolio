import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch key={location.pathname} location={location}>
          <Route exact path="/" component={AboutUs} />
          <Route exact path="/our-work" component={OurWork} />
          <Route exact path="/our-work/:id" component={MovieDetail} />
          <Route exact path="/contact-us" component={ContactUs} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
