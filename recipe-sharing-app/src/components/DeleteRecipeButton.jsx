// DeleteRecipeButton component
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from './RecipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useNavigate(state => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
  };

  return (
    <button onClick={handleDelete}>Delete Recipe</button>
  );
};

export default DeleteRecipeButton;
