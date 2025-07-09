import { Link } from "react-router-dom";


export default function AuthHeader() {
  return (
    <header className="flex justify-between items-center px-6 py-5 shadow-2xs bg-white sticky top-0 z-50">
      <Link to={"/"}><h1 className="text-2xl font-bold text-green-600">TastyTalks</h1></Link>
    </header>
  );
}
