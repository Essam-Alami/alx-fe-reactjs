import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  deleteRecipe: (deleteRecipe) => set(state => ({ recipes: [...state.recipes, deleteRecipe]})),
  updateRecipe: (updateRecipe) => set(state => ({ recipes: [...state.recipes, updateRecipe]})),
}));