import { FaStar } from "react-icons/fa";

const TopBar = () => {
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return "Good morning";
        if (hour < 18) return "Good afternoon";
        return "Good evening";
    };

    return (
        <div className="p-4 flex justify-between items-center mt-5">
            <div>
                <h2 className="text-xl font-semibold">{getGreeting()}, Jen</h2>
                <p className="text-sm text-gray-600 inline-flex items-center">
                    <FaStar className="text-black mr-1" /> 4.5
                </p>
            </div>
        </div>
        
    );
};

export default TopBar;
