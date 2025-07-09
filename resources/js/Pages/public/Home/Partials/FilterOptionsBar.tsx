
const filters = [
  "Offers", "Delivery fee", "Under 30 min", "Highest rated",
  "Rating", "Price", "Dietary", "Sort"
];

export default function FilterOptionsBar() {
  return (
    <div className="flex flex-wrap gap-3 px-4 py-2 bg-white justify-center">
      {filters.map((filter, index) => (
        <button
          key={index}
          className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full border hover:bg-gray-200 transition"
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
