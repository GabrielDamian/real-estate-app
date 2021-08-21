import logo from './logo.svg';
import './App.css';
import Dashbord from './components/Dashboard/Dashboard.js';
import SignUp from './components/SignUp/SignUp.js';
import Login from './components/Login/Login.js';
import Home from './components/Home/Home';
import PropertyPage from './components/PropertyPage/PropertyPage';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashbord} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/property/:id" component={PropertyPage} />
      </Switch>
    </Router>
  );
}

export default App;
