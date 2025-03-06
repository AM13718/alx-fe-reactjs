import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import FavoriteButton from './FavoriteButton';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes(state));

  return (
    <div>
      <h2>Recipe List</h2>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
            <FavoriteButton recipeId={recipe.id} />
          </div>
        ))
      ) : (
        <p>No recipes available.</p>
      )}
    </div>
  );
};

export default RecipeList;


