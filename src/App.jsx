import './reset.css'
import HomePage from './page/HomePage'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './page/ShopPage'
import LoginForm from './page/LoginForm'
import SignupForm from './page/SignupForm'
import { ToastContainer } from 'react-toastify';

function App() {
  

  return (
    <>
    <ToastContainer />
    <Switch>
    <Route path="/shop">
      <ShopPage/>
      </Route>
      <Route path="/signup">
      <SignupForm/>
      </Route>
      <Route path="/login">
      <LoginForm/>
      </Route>
    <Route  exact path="/">
      <HomePage/>
      </Route>
      
      </Switch>
    </>
  )
}

export default App
