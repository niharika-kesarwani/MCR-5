/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import { recipeReducer, initialRecipe } from "../reducers/recipes-reducer";
import { recipes as originalRecipes } from "../data/recipes";
import { recipeConstants } from "../constants/recipe-constants";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useReducer(recipeReducer, initialRecipe);
  const { SET_RECIPES } = recipeConstants;

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

  useEffect(() => {
    const localStorageRecipes = localStorage.getItem("recipes");
    if (localStorageRecipes) {
      setRecipes({
        type: SET_RECIPES,
        payload: JSON.parse(localStorageRecipes),
      });
    } else {
      localStorage.setItem("recipes", JSON.stringify(originalRecipes));
      setRecipes({ type: SET_RECIPES, payload: originalRecipes });
    }
  }, []);

  return (
    <RecipeContext.Provider value={{ recipes, setRecipes, radioSortedRecipes }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipe = () => useContext(RecipeContext);
