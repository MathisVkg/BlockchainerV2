import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import User from "./components/User"
import './assets/scss/Base.css'

export default function App() {
  return (
      <Router>
          <NavBar/>
          <Routes>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/user">
              <User />
            </Route>
          </Routes>
      </Router>
  )
}

