import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import './App.css'
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import User from "./components/User"
import './assets/scss/Base.css'

function App() {
  return (
      <Router>
          <NavBar/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/user">
              <User />
            </Route>
          </Switch>
      </Router>
  )
}

export default App
