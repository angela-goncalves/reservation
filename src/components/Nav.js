import { Link } from "react-router-dom";
import image from "../plateHeader.png";

export default function Nav() {
  return (
    <div className="z-0">
      <div className="relative ">
        <Link to="/reservation">
          <p className="py-10 text-4xl text-white font-bold">dine</p>
        </Link>
        <img
          src={image}
          alt="Logo"
          className="w-full max-w-2xl absolute top-0 right-0 "
        />
      </div>
    </div>
  );
}
