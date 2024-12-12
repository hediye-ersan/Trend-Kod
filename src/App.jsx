import './reset.css'
import HomePage from './page/HomePage'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './page/ShopPage'
import LoginForm from './page/LoginForm'
import SignupForm from './page/SignupForm'

function App() {
  

  return (
    <>
    <Switch>
    <Route path="/Shop">
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
