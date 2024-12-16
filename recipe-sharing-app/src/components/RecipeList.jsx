import { useRecipeStore } from './RecipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <link href="react-router-dom"></link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
