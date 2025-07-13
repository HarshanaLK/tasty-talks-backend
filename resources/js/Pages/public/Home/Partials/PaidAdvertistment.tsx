import { useEffect, useState } from "react";
import PaidAdvertistmentCard from "./PaidAdvertistmentCard";

const dummyAds = [
  {
    name: "Shan Food Cabin",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB8ohnS7VBR7E7po28lfP4fpWFZ3cEXxkQ6w&s",
  },
  {
    name: "Surasa",
    image:
      "https://scontent-bom1-1.xx.fbcdn.net/v/t39.30808-6/472211456_122188665986247778_6989367011194233953_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gdk8AKcbJjYQ7kNvwHSHIp2&_nc_oc=AdkwbM8EyIdSObyKhYUaNENACPRDLJ7XvYn9Xb5gEE5gHzOnYut8dL8FdUv2fuayQ4I&_nc_zt=23&_nc_ht=scontent-bom1-1.xx&_nc_gid=TbtY63NYxnayueCvy63pzg&oh=00_AfSB2LWeczkz60T4mI3KsANtd62_w1bYMRqerHL-QBSe3Q&oe=687319FA",
  },
];

export default function PaidAdvertistmentSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === dummyAds.length - 1 ? 0 : prev + 1
      );
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="my-8">
      <div className="mb-6 transition-all duration-500">
        <PaidAdvertistmentCard
          name={dummyAds[currentIndex].name}
          image={dummyAds[currentIndex].image}
        />
      </div>

      {/* Slide indicators (optional) */}
      {/* <div className="flex justify-center space-x-2 mt-2">
        {dummyAds.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 w-2 rounded-full ${
              idx === currentIndex ? "bg-green-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div> */}
    </section>
  );
}
