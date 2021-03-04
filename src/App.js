import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import GlobalStyle from './GlobalStyle';
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/HomePage/Home";
import Solutions from "./pages/Solutions/Solutions";
import Services from "./pages/Services/Services";
import Marketing from "./pages/Marketing/Marketing";
function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/solutions"  component={Solutions} />
          <Route path="/services"  component={Services} />
          <Route path="/marketing"  component={Marketing} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
