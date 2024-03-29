import React from 'react';
import logo from './logo.svg';
import Customers from './Customers'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


class App extends Component {
  render(){  
    console.log("Host URL"+process.env.PUBLIC_URL);
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> My first REACT APP    </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Switch>
                <Route exact path= "/" render={() => (
                  <Redirect to="/customerlist"/>
                )}/>
                 <Route exact path='/customerlist' component={Customers} />
          </Switch>
    </div>
    </Router>
  );
}
}

export default App;
