import './reset.css'
import HomePage from './page/HomePage'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './page/ShopPage'
import LoginForm from './page/LoginForm'
import SignupForm from './page/SignupForm'
import { ToastContainer } from 'react-toastify';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Store/store';

function App() {


  return (
    <>
      <Provider store={store}>
        <ToastContainer />
        <Switch>
          <Route path="/shop">
            <ShopPage />
          </Route>
          <Route path="/signup">
            <SignupForm />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Provider>
    </>
  )
}

export default App
