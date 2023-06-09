
import { useContext } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import useCart from "../../../hooks/useCart";


const NavBar = () => {
  const [cart] = useCart()
  const { user, logOut } = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
      .then(data => {
        console.log(data)
      })
      .catch(error => console.error(error.message))
  }
  const navItems = <>
    <li><Link>Item 1</Link></li>
    <li><Link to="/menu">Menu</Link></li>
    <li><Link to="/order/salad">Order</Link></li>
    <li><Link to="dashboard/mycart">
      <button className="btn gap-2">
        <FaShoppingCart></FaShoppingCart>
        <div className="badge badge-secondary">{cart?.length || 0}</div>
      </button>
    </Link></li>


    {
      user ? <><button onClick={handleLogOut} >Logout</button ></>
        : <li><Link to="/login">Login</Link></li>
    }



  </>
  return (
    <>
      <div className="navbar bg-black bg-opacity-30 max-w-screen-xl text-white fixed z-20 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;