import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/styles';

const theme = createTheme();

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/productos">
              <Products />
            </Route>
            <Route path="/productos/:id">
              <Products />
            </Route>
            <Route path="*">
              404
            </Route>
          </Switch>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
