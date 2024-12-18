// src/components/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setRecipes(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
        <Link />
      <h1 className="text-2xl font-bold mb-4">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map(recipe => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-md p-4">
            <img src={recipe.image} alt={recipe.title} className="w-full h-32 object-cover rounded-t-lg" />
            <h2 className="text-xl font-semibold mt-2">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.summary}</p>
            <a href={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline mt-2 block">View Recipe</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
