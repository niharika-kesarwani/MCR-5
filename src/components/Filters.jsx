import { recipeConstants } from "../constants/recipe-constants";
import { useRecipe } from "../main";

export const Filters = () => {
  const {
    recipes: { radioFilter },
    setRecipes,
  } = useRecipe();
  const { SET_SEARCH_FILTER, SET_RADIO_FILTER } = recipeConstants;
  const filters = ["Name", "Ingredients", "Cuisine"];

  return (
    <div className="flex w-full flex-wrap items-center gap-5 border p-2">
      <div className="border-r">
        <input
          type="text"
          placeholder="Search the item you want..."
          className="px-2 py-1"
          onChange={(e) =>
            setRecipes({ type: SET_SEARCH_FILTER, payload: e.target.value })
          }
        />
      </div>
      <div className="text-l font-bold">Filters:</div>
      {filters?.map((filter, index) => (
        <label className="flex gap-3 hover:cursor-pointer" key={index}>
          <input
            type="radio"
            name="filter"
            className="hover:cursor-pointer"
            value={filter.toLowerCase()}
            defaultChecked={radioFilter === filter.toLowerCase()}
            onChange={(e) =>
              setRecipes({ type: SET_RADIO_FILTER, payload: e.target.value })
            }
          />
          {filter}
        </label>
      ))}
    </div>
  );
};
