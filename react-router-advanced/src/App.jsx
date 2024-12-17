// App.jsx
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <Routes />
      <div>
        <h1>My React App</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route component={NotFound} />
          <Route path="/blog/:id" component={BlogPost} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

