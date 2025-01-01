import './reset.css'
import HomePage from './page/HomePage'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './page/ShopPage'
import LoginForm from './page/LoginForm'
import SignupForm from './page/SignupForm'
import ProductDetails from './page/ProductDetails'
import ShoppingCartPage from './page/ShoppingCartPage'
import { ToastContainer } from 'react-toastify';
import React from 'react';
import { Provider } from 'react-redux';
import store from './Store/store';

function App() {

  return (
    <>
      <Provider store={store}>
        <ToastContainer />
        <Switch>
          <Route path="/productdetails/:productId">
            <ProductDetails />
          </Route>
          <Route path="/shop">
            <ShopPage />
          </Route>
          <Route path="/signup">
            <SignupForm />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/shopping-cart">
            <ShoppingCartPage />
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
