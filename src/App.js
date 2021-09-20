import logo from './logo.svg';
import './App.css';
import Dashbord from './components/Dashboard/Dashboard.js';
import SignUp from './components/SignUp/SignUp.js';
import Login from './components/Login/Login.js';
import Home from './components/Home/Home';
import PropertyPage from './components/PropertyPage/PropertyPage';
import InvalidProperty from './components/404NotFound/InvalidProperty';
import About from './components/About/About';
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
        <Route path="/about" component={About} />
        <Route path="/property/:id" component={PropertyPage} />
        <Route path="*">
          <InvalidProperty text="This page do not exists!"/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
