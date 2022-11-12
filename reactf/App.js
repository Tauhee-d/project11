import "./App.css";
// import MainContainer from './components/Navbar/MainContainer/MainContainer';
import Navbar from "./components/Navbar/Navbar";
import Topbar from "./components/Topbar/Topbar";
// import Dashboard from './pages/Rooms/Dashboard/Dashboard';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Rooms from "./pages/Rooms/Room";
import UserList from "./pages/UserList/UserList";
// import { Admin } from 'react-admin';

// import MainRoom from './pages/Rooms/Room';

function App() {
  return (
    // <Admin>

    <Router>
      <Topbar title="fu@@d" />
      <div className="containers">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/rooms">
            <Rooms />
          </Route>
          <Route path="/patients">
            <UserList />
          </Route>

          {/* <Route path="/MainRoom">
      <MainRoom/>
    </Route> */}
        </Switch>
        {/* <MainContainer/> */}
        {/* <Dashboard/> */}
      </div>
    </Router>
    // </Admin>
  );
}

export default App;
