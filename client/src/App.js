import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import User from "./components/User"
import './assets/scss/Base.css'
import Bitcoin from "./components/pages/Bitcoin";
import SignUp from "./components/pages/SignUp";

export default function App() {
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
            <Route path="/bitcoin">
                <Bitcoin />
            </Route>
            <Route path="/sign-up">
                <SignUp />
            </Route>
          </Switch>
      </Router>
  )
}

