import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/SignUp';

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
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
