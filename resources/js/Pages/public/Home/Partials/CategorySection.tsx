import RestaurantCard from "./RestaurantCard";

const dummyRestaurants = [
    {
        id:1,
        name: "KFC - Colombo",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB8ohnS7VBR7E7po28lfP4fpWFZ3cEXxkQ6w&s",
        rating: 4.5,
        category: "Fast Food"
    },
    {
        id:2,
        name: "Pizza Hut - Nugegoda",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB8ohnS7VBR7E7po28lfP4fpWFZ3cEXxkQ6w&s",
        rating: 4.2,
        category: "Pizza"
    },
    {
        id:3,
        name: "KFC - Colombo",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB8ohnS7VBR7E7po28lfP4fpWFZ3cEXxkQ6w&s",
        rating: 4.5,
        category: "Fast Food"
    },
    {
        id:4,
        name: "Pizza Hut - Nugegoda",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB8ohnS7VBR7E7po28lfP4fpWFZ3cEXxkQ6w&s",
        rating: 4.2,
        category: "Pizza"
    },
     {
        id:5,
        name: "KFC - Colombo",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB8ohnS7VBR7E7po28lfP4fpWFZ3cEXxkQ6w&s",
        rating: 4.5,
        category: "Fast Food"
    },
    {
        id:6,
        name: "Pizza Hut - Nugegoda",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB8ohnS7VBR7E7po28lfP4fpWFZ3cEXxkQ6w&s",
        rating: 4.2,
        category: "Pizza"
    },
    {
        id:7,
        name: "KFC - Colombo",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB8ohnS7VBR7E7po28lfP4fpWFZ3cEXxkQ6w&s",
        rating: 4.5,
        category: "Fast Food"
    },
    {
        id:7,
        name: "Pizza Hut - Nugegoda",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB8ohnS7VBR7E7po28lfP4fpWFZ3cEXxkQ6w&s",
        rating: 4.2,
        category: "Pizza"
    }
];

export default function CategorySection() {
    return (
        <div className="mt-10 border-b-1 pb-6 border-gray-200">
            <p className="font-bold text-2xl ">Most popular restaurants</p>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 place-items-center gap-y-8 ">
                {dummyRestaurants.map((r, i) => (
                    <RestaurantCard onClick={function (): void {
                        throw new Error("Function not implemented.");
                    } } key={i} {...r} />
                ))}
            </section>
        </div>
    )
}
