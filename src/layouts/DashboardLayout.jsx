import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import Navbar from "../components/Navbar";

const DashboardLayout = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin(user?.email);

  return (
    <>
      <Navbar />
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-72 min-h-full bg-base-200 text-base-content">
            <ul>
              {isAdmin && (
                <>
                  <li className="m-1">
                    <Link to={"/dashboard"}>Dashboard</Link>
                  </li>
                  <li className="m-1">
                    <Link to={"/dashboard/all-products"}>All Products</Link>
                  </li>
                  <li className="m-1">
                    <Link to={"/dashboard/add-products"}>Add Product</Link>
                  </li>
                  {/* <li className="m-1">
                    <Link to={"/dashboard/all_user"}>All User</Link>
                  </li> */}
                </>
              )}
              <li className="m-1">
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/dashboard/update_password"}>Chnage Password</Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
