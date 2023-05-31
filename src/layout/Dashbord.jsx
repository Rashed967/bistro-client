import { FaAddressBook, FaBars, FaBook, FaCalendarAlt, FaCarAlt, FaCartArrowDown, FaHome, FaShoppingCart, FaUtensilSpoon, FaWallet } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Dashbord = () => {

    const isAdmin = true
    return (
        <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* <!-- Page content here --> */}
      <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-orange-300 text-base-content">
      {/* <!-- Sidebar content here --> */}
      {
        isAdmin ? <>
        <li><a><FaHome></FaHome> Admin Home</a></li>
        <li><a><FaUtensilSpoon></FaUtensilSpoon> Add item</a></li>
        <li><a><FaBars></FaBars> Manage items</a></li>
        <li><Link to="alluser"><FaBook></FaBook> Manage all user</Link></li>
        <div className="divider"></div>
        <li><Link to="/"> <FaHome></FaHome> Home</Link></li>
        <li><Link to="/menu"><FaBars></FaBars> Menu</Link></li>
      <li><Link to="/order/salad"><FaCartArrowDown></FaCartArrowDown> Order</Link></li>
         </>
        : <><li><a><FaHome></FaHome> User Home</a></li>
        <li><a><FaShoppingCart></FaShoppingCart> My Cart</a></li>
        <li><a><FaCalendarAlt></FaCalendarAlt> Reservation</a></li>
        <li><a><FaWallet></FaWallet> Payment History</a></li>
        <div className="divider"></div>
        <li><Link to="/"> <FaHome></FaHome> Home</Link></li>
        <li><Link to="/menu"><FaBars></FaBars> Menu</Link></li>
      <li><Link to="/order/salad"><FaCartArrowDown></FaCartArrowDown> Order</Link></li></>
      }
    </ul>
  
  </div>
</div>
    );
};

export default Dashbord;