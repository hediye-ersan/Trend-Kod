import './reset.css'
import HomePage from './page/HomePage'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './page/ShopPage'

function App() {
  

  return (
    <>
    <Switch>
    <Route path="/Shop">
      <ShopPage/>
      </Route>
    <Route path="/">
      <HomePage/>
      </Route>
      
      </Switch>
    </>
  )
}

export default App
