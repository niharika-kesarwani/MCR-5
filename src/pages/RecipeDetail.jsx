import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecipe } from "../main";
import { recipeConstants } from "../constants/recipe-constants";

export const RecipeDetail = () => {
  const { recipeId } = useParams();
  const {
    recipes: { selectedRecipe },
    setRecipes,
  } = useRecipe();
  const { SELECTED_RECIPE } = recipeConstants;

  useEffect(() => {
    setRecipes({ type: SELECTED_RECIPE, payload: recipeId });
  }, []);

  const { id, name, cuisine, ingredients, instructions, imgUrl } =
    selectedRecipe;

  return (
    <div className="flex h-screen flex-col items-center gap-5 p-5">
      <div className="text-2xl font-bold">{name}</div>
      <div className="flex flex-col gap-5 border p-5 md:flex-row">
        <div className="min-w-[20%]">
          <img src={imgUrl} className="h-full object-cover" />
        </div>
        <div className="flex flex-col justify-around">
          <div>
            <span className="font-bold">Cuisine:</span> {cuisine}
          </div>
          <div>
            <span className="font-bold">Ingredients:</span> {ingredients}
          </div>
          <div className="font-bold">Instructions:</div>
          <div>{instructions}</div>
        </div>
      </div>
    </div>
  );
};
