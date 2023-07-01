/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { recipeReducer, initialRecipe } from "../reducers/recipes-reducer";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useReducer(recipeReducer, initialRecipe);

  const radioSortedRecipes = recipes.recipes.filter(
    ({ name, ingredients, cuisine }) => {
      if (recipes.radioFilter === "name") {
        return name.toLowerCase().includes(recipes.searchFilter.toLowerCase());
      } else if (recipes.radioFilter === "ingredients") {
        return ingredients
          .toLowerCase()
          .includes(recipes.searchFilter.toLowerCase());
      } else {
        return cuisine
          .toLowerCase()
          .includes(recipes.searchFilter.toLowerCase());
      }
    }
  );

  return (
    <RecipeContext.Provider value={{ recipes, setRecipes, radioSortedRecipes }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipe = () => useContext(RecipeContext);
