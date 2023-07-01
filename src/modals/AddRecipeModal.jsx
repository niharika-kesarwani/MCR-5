import { useState } from "react";
import { useRecipe } from "../main";
import { recipeConstants } from "../constants/recipe-constants";
import { v4 as uuid } from "uuid";

export const AddRecipeModal = () => {
  const [formDetails, setFormDetails] = useState({});
  const { setRecipes } = useRecipe();
  const { SET_SHOW_ADD_RECIPE_MODAL, ADD_RECIPE } = recipeConstants;

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setRecipes({ type: ADD_RECIPE, payload: { ...formDetails, id: uuid() } });
    setRecipes({ type: SET_SHOW_ADD_RECIPE_MODAL, payload: false });
  };

  const updateFormDetails = (e) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="flex flex-col gap-5 rounded-2xl bg-white p-4"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="font-bold uppercase">Add Recipe</div>
      <form className="flex flex-col gap-4" onSubmit={formSubmitHandler}>
        <div className="flex items-center justify-between gap-3">
          <label>Name:</label>
          <input
            type="text"
            className="border px-2 py-1"
            name="name"
            onChange={(e) => updateFormDetails(e)}
          />
        </div>
        <div className="flex items-center justify-between gap-3">
          <label>Image URL:</label>
          <input
            type="text"
            className="border px-2 py-1"
            name="imgUrl"
            onChange={(e) => updateFormDetails(e)}
          />
        </div>
        <div className="flex items-center justify-between gap-3">
          <label>Cuisine:</label>
          <input
            type="text"
            className="border px-2 py-1"
            name="cuisine"
            onChange={(e) => updateFormDetails(e)}
          />
        </div>
        <div className="flex items-center justify-between gap-3">
          <label>Ingredients:</label>
          <input
            type="text"
            className="border px-2 py-1"
            name="ingredients"
            onChange={(e) => updateFormDetails(e)}
          />
        </div>
        <div className="flex items-center justify-between gap-3">
          <label>Instructions:</label>
          <input
            type="text"
            className="border px-2 py-1"
            name="instructions"
            onChange={(e) => updateFormDetails(e)}
          />
        </div>
        <button
          className="rounded-full bg-red-400 p-1 text-lg font-bold uppercase hover:cursor-pointer"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};
