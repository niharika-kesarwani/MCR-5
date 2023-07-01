import { recipes } from "../data/recipes";
import { recipeConstants } from "../constants/recipe-constants";
import { toast } from "react-hot-toast";

const {
  SET_SHOW_ADD_RECIPE_MODAL,
  ADD_RECIPE,
  SET_SEARCH_FILTER,
  SET_RADIO_FILTER,
} = recipeConstants;

export const recipeReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_SHOW_ADD_RECIPE_MODAL:
      return { ...state, showAddRecipeModal: payload };
    case ADD_RECIPE:
      toast.success("Recipe added successfully!");
      return { ...state, recipes: [...state.recipes, payload] };
    case SET_SEARCH_FILTER:
      return { ...state, searchFilter: payload };
    case SET_RADIO_FILTER:
      return { ...state, radioFilter: payload };
    default:
      return state;
  }
};

export const initialRecipe = {
  recipes: recipes,
  showAddRecipeModal: false,
  radioFilter: "name",
  searchFilter: "",
};
