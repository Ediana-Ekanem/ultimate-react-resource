import { Link } from "react-router-dom";

const Navabr = () => {
  return (
    <div>
      <nav className="bg-black text-white h-24 fixed top-0 right-0 w-full ">
        <ul className="flex justify-center items-center space-x-8 p-10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navabr;
