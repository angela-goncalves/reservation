import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="space-y-8 flex flex-col z-10">
      <h1 className="text-white w-full max-w-xs text-5xl font-thin">
        Exquisite dining since 1989
      </h1>
      <p className="text-gray-300 w-full max-w-xs">
        Experience our seasonal menu in a beautiful country surroundings. Eat
        the fheshest produce from the confort of our farmhouse.
      </p>
      <button className="border-2 border-white p-2 text-gray-50">
        <Link to="/reservation">BOOK A TABLE</Link>
      </button>
    </div>
  );
}
