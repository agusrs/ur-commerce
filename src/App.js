import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
            <Route exact path="/">
              Home
            </Route>
            <Route path="/productos">
              Products
            </Route>
          </Switch>
      </Router>
    </>
  );
}

export default App;
