export const Filters = () => {
  const filters = ["Name", "Ingredients", "Cuisine"];

  return (
    <div className="flex w-full flex-wrap items-center gap-5 border p-2">
      <div className="border-r">
        <input
          type="text"
          placeholder="Search the item you want..."
          className="px-2 py-1"
        />
      </div>
      <div className="text-l font-bold">Filters:</div>
      {filters?.map((filter, index) => (
        <label className="flex gap-3 hover:cursor-pointer" key={index}>
          <input type="radio" name="filter" className="hover:cursor-pointer" />
          {filter}
        </label>
      ))}
    </div>
  );
};
