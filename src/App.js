import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/productos">
            Products
          </Route>
          <Route path="*">
            404
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
