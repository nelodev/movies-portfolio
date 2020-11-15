import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import { Switch, Route } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path="/" component={AboutUs} />
        <Route exact path="/our-work" component={OurWork} />
        <Route exact path="/contact-us" component={ContactUs} />
      </Switch>
    </div>
  );
}

export default App;
