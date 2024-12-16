// App.jsx
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import { element } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <Routes />
        <Switch>
          <Route exact path="/" component={RecipeList} />
          <Route path="/add" component={AddRecipeForm} />
          <Route path="/recipe/:recipeId" component={RecipeDetails} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
