
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/src/data.json')
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error('Error loading data:', error));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Recipe Sharing Platform</h1>
      <div className="flex justify-center mb-6">
        <Link to="/add-recipe" className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600">
          Add New Recipe
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
            <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition">
              <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded-t-lg" />
              <h2 className="text-xl font-semibold mt-4">{recipe.title}</h2>
              <p className="text-gray-600 mt-2">{recipe.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

