import { recipes } from "../data/recipes";
import { recipeConstants } from "../constants/recipe-constants";

const {
  SET_SHOW_ADD_RECIPE_MODAL,
  ADD_RECIPE,
  SET_SEARCH_FILTER,
  SET_RADIO_FILTER,
  DELETE_RECIPE,
  SELECTED_RECIPE,
  EDIT_RECIPE,
  UPDATE_RECIPE,
} = recipeConstants;

export const recipeReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_SHOW_ADD_RECIPE_MODAL:
      return { ...state, showAddRecipeModal: payload };
    case ADD_RECIPE:
      return { ...state, recipes: [...state.recipes, payload] };
    case SET_SEARCH_FILTER:
      return { ...state, searchFilter: payload };
    case SET_RADIO_FILTER:
      return { ...state, radioFilter: payload };
    case DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter(({ id }) => id !== payload),
      };
    case SELECTED_RECIPE:
      return {
        ...state,
        selectedRecipe: state.recipes?.find(({ id }) => id === payload),
      };
    case EDIT_RECIPE:
      return { ...state, toEditRecipe: payload };
    case UPDATE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.map((recipe) =>
          recipe.id === state.toEditRecipe.id ? payload : recipe
        ),
      };
    default:
      return state;
  }
};

export const initialRecipe = {
  recipes: recipes,
  showAddRecipeModal: false,
  radioFilter: "name",
  searchFilter: "",
  selectedRecipe: {},
  toEditRecipe: null,
};
