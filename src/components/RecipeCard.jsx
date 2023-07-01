/* eslint-disable react/prop-types */
import EditSharpIcon from "@mui/icons-material/EditSharp";
import DeleteIcon from "@mui/icons-material/Delete";

export const RecipeCard = ({ recipe }) => {
  const { id, name, cuisine, ingredients, instructions, imgUrl } = recipe;

  return (
    <div className="flex w-60 flex-col justify-between rounded-lg border p-3">
      <div className="relative w-full md:h-[70%]">
        <img className="h-full w-full object-cover" src={imgUrl} />
        <div className="absolute right-0 top-0 flex gap-2 bg-white p-1 hover:cursor-pointer">
          <EditSharpIcon />
          <DeleteIcon />
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
          <div className="hover:cursor-pointer">See Recipe</div>
        </div>
        <div className="flex justify-between">
          <div className="font-bold">Instructions:</div>
          <div className="hover:cursor-pointer">See Recipe</div>
        </div>
      </div>
    </div>
  );
};
