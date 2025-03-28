import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!title) tempErrors.title = 'Title is required.';
    if (!ingredients) tempErrors.ingredients = 'Ingredients are required.';
    if (!steps) tempErrors.steps = 'Preparation steps are required.';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log({ title, ingredients, steps });
    alert('Recipe submitted successfully!');
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-6 md:max-w-2xl">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Recipe Title</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Ingredients</label>
          <textarea
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Preparation Steps</label>
          <textarea
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;

