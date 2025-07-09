import { Link } from "@inertiajs/react";



export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-2xs bg-white sticky top-0 z-50">
      <Link href={""} ><h1 className="text-2xl font-bold text-green-600">TastyTalks</h1></Link>
      <div>
        <input
          type="text"
          placeholder="Search in TastyTalks"
          className="px-4 py-2 rounded-full border border-gray-300 w-xl "
        />
      </div>
      <div className="flex items-center gap-4">
        <Link to={"/login"} className="text-sm text-gray-600 hover:text-black">Login</Link>
        <Link className="bg-black text-white px-4 py-2 rounded-full text-sm" to={"/register"}>Sign up</Link>
      </div>
    </header>
  );
}
