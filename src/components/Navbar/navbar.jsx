import { useNavigate } from "react-router-dom";
import { logOut } from "../../config/firebase/Auth/Login";

const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    logOut();
    localStorage.removeItem("isSignedIn");
    navigate("/ ");
  };
  return (
    <nav className="w-full shadow-lg  ">
      <div className="navbar bg-base-100 px-5">
        <div className="flex-1 text-gray-500">
          <div className="btn btn-ghost normal-case text-xl">
            <figure className="flex flex-row items-center gap-x-6">
              <img src={require("../../assets/Logo_SMK.png")} alt="" className="w-10" />
              <figcaption>SMK Telkom Malang</figcaption>
            </figure>
          </div>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full outline outline-red-600">{/* <img src="https://placeimg.com/80/80/people" /> */}</div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <div className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </div>
              </li>
              <li>
                <div>Settings</div>
              </li>
              <li>
                <div onClick={logout}>Logout</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
