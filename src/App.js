import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import ConfirmationPage from './Components/ConfirmationPage/ConfirmationPage';
import HomeMenu from './Components/HomeMenu/HomeMenu';
import OrderPage from './Components/OrderPage/OrderPage';
import {
  Switch,
  Route
} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);

  }

  render(){
  return (
    <div >
      <Header/>
        <Switch>

        <Route path="/HomeMenu">
          <HomeMenu />
        </Route>  

          <Route path="/OrderPage">
            <OrderPage/>
          </Route>

          <Route path="/ConfirmationPage">
          <ConfirmationPage/>
          </Route>

          <Route path="/Update/:id">
            <OrderPage/>
          </Route>

          
        </Switch>
    </div>
  );
}
}

export default App;
