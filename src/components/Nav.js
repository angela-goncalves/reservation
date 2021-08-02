import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="flex flex-col items-center">
      <p className="py-10 text-4xl text-white font-bold">
        <Link to="/">dine</Link>
      </p>
    </div>
  );
}
