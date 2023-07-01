import { Filters } from "../components/Filters";
import { RecipeCard } from "../components/RecipeCard";
import { useRecipe } from "../main";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { AddRecipeModal } from "../modals/AddRecipeModal";
import { recipeConstants } from "../constants/recipe-constants";

export const Home = () => {
  const {
    recipes: { recipes, showAddRecipeModal },
    setRecipes,
  } = useRecipe();
  const { SET_SHOW_ADD_RECIPE_MODAL } = recipeConstants;

  return (
    <div className="flex w-full flex-col gap-6 p-5">
      <Filters />
      <div className="text-3xl font-bold">All Recipies:</div>
      <ul className="flex flex-wrap gap-10">
        {recipes?.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe?.id} />
        ))}
        <div
          className="scale-150 items-center self-center pl-20 text-gray-300 hover:cursor-pointer hover:text-black"
          onClick={() =>
            setRecipes({ type: SET_SHOW_ADD_RECIPE_MODAL, payload: true })
          }
        >
          <AddCircleOutlineOutlinedIcon />
        </div>
      </ul>
      {showAddRecipeModal && (
        <div
          className="fixed inset-0 z-50 flex h-screen items-center justify-center bg-black bg-opacity-50"
          onClick={() => {
            setRecipes({ type: SET_SHOW_ADD_RECIPE_MODAL, payload: false });
          }}
        >
          <AddRecipeModal />
        </div>
      )}
    </div>
  );
};
