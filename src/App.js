import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import Details from './Components/Details';
import Cart from './Components/Cart';
import Default from './Components/Default';
import { Route, Switch } from 'react-router';



function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>

      <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route exact path="/details" component={Details}></Route>
        <Route exact path="/Cart" component={Cart}></Route>
        <Route component={Default}></Route>
      </Switch>

    </React.Fragment >
  );
}

export default App;
