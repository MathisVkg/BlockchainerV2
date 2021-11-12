import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import User from "./components/User"
import Details from "./components/pages/Details"
import Wallets from "./components/Wallets"
import './assets/scss/Base.scss'
import SignUp from "./components/pages/SignUp.jsx";
import SignIn from "./components/pages/SignIn";

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
            <Route path="/sign-in">
                <SignIn />
            </Route>
            <Route path="/sign-up">
                <SignUp />
            </Route>
            <Route path="/details/:cryptoid">
                <Details />
            </Route>
            <Route path="/wallets">
                <Wallets />
            </Route>
          </Switch>
      </Router>
  )
}

