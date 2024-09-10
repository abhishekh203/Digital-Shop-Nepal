import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("users"));
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart);

  const logout = () => {
    localStorage.removeItem("users");
    navigate("/login");
  };

  const navList = (
    <ul className="flex space-x-6 font-medium text-lg px-5 text-gray-200">
      <li className="hover:text-teal-300 transition duration-300 ease-in-out transform hover:scale-105">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:text-teal-300 transition duration-300 ease-in-out transform hover:scale-105">
        <Link to="/allproduct">All Products</Link>
      </li>
      {!user && (
        <>
          <li className="hover:text-teal-300 transition duration-300 ease-in-out transform hover:scale-105">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="hover:text-teal-300 transition duration-300 ease-in-out transform hover:scale-105">
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
      {user?.role === "user" && (
        <li className="hover:text-teal-300 transition duration-300 ease-in-out transform hover:scale-105">
          <Link to="/user-dashboard">User</Link>
        </li>
      )}
      {user?.role === "admin" && (
        <li className="hover:text-teal-300 transition duration-300 ease-in-out transform hover:scale-105">
          <Link to="/admin-dashboard">Admin</Link>
        </li>
      )}
      {user && (
        <li
          className="cursor-pointer hover:text-teal-300 transition duration-300 ease-in-out transform hover:scale-105"
          onClick={logout}
        >
          Logout
        </li>
      )}
      <li className="hover:text-teal-300 transition duration-300 ease-in-out transform hover:scale-105">
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </li>
      <li className="hover:text-teal-300 transition duration-300 ease-in-out transform hover:scale-105">
        <Link to="/ContactUs">Contact Us</Link>
      </li>
    </ul>
  );

  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-black shadow-lg sticky top-0 z-50">
      <div className="lg:flex lg:justify-between items-center py-4 lg:px-8 px-5">
        <div className="left flex items-center space-x-4">
          <Link to="/" className="flex items-center">
            <img
              src="https://cdn.vectorstock.com/i/1000x1000/83/84/ott-media-platform-icon-for-web-vector-43268384.webp"
              alt="Shop Logo"
              className="w-12 h-12 object-cover rounded-full transition-transform duration-300 hover:scale-105"
            />
          </Link>
          <div className="text-white">
            <h2 className="text-3xl font-bold leading-none">Premium Shop</h2>
            <h3 className="text-xl font-semibold">Nepal</h3>
          </div>
        </div>
        <div className="right flex justify-center lg:justify-end mt-4 lg:mt-0">
          {navList}
        </div>
        <div className="flex justify-center mt-4 lg:mt-0 lg:ml-8">
          <SearchBar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
