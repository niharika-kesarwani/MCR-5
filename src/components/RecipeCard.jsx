/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import DeleteIcon from "@mui/icons-material/Delete";
import { recipeConstants } from "../constants/recipe-constants";
import { useRecipe } from "../main";
import { toast } from "react-hot-toast";

export const RecipeCard = ({ recipe }) => {
  const { setRecipes } = useRecipe();
  const { id, name, cuisine, ingredients, instructions, imgUrl } = recipe;
  const { DELETE_RECIPE } = recipeConstants;

  return (
    <div className="flex w-60 flex-col justify-between rounded-lg border p-3">
      <div className="relative w-full md:h-[70%]">
        <img className="h-full w-full object-cover" src={imgUrl} />
        <div className="absolute right-0 top-0 flex gap-2 bg-white p-1 hover:cursor-pointer">
          <EditSharpIcon />
          <div
            onClick={() => {
              toast.success("Deleted recipe successfully!");
              setRecipes({ type: DELETE_RECIPE, payload: id });
            }}
          >
            <DeleteIcon />
          </div>
        </div>
      </div>
      <div className="text-xl font-bold">{name}</div>
      <div>
        <div className="flex justify-between">
          <div className="font-bold">Cuisine Type:</div>
          <div>{cuisine}</div>
        </div>
        <div className="flex justify-between">
          <div className="font-bold">Ingredients:</div>
          <NavLink to={`/detail/${id}`}>
            <div className="hover:cursor-pointer">See Recipe</div>
          </NavLink>
        </div>
        <div className="flex justify-between">
          <div className="font-bold">Instructions:</div>
          <NavLink to={`/detail/${id}`}>
            <div className="hover:cursor-pointer">See Recipe</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
