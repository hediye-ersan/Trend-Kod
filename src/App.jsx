import './reset.css'
import HomePage from './page/HomePage'
import { Route, Switch } from 'react-router-dom'

function App() {
  

  return (
    <>
    <Switch>
    <Route path="/" exact>
      <HomePage/>
      </Route>
      </Switch>
    </>
  )
}

export default App
