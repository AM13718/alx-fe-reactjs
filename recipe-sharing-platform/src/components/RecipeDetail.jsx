import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/src/data.json')
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error('Error loading data:', error));
  }, [id]);

  if (!recipe) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg" />
      <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
      <h2 className="text-2xl font-semibold mt-4">Ingredients:</h2>
      <ul className="list-disc ml-6 mt-2">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="text-gray-700">{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mt-4">Instructions:</h2>
      <p className="text-gray-700 mt-2">{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
