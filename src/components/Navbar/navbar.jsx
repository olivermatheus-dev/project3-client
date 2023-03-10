import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logotipo/logo.svg";
import { ToggleButtonTheme } from "./toggleTheme.jsx";
import { AuthContext } from "../../config/context/authContext";
import { api } from "../../config/api/api";
import { MenuToggle } from "./dropdownmenu.jsx";
import { useUserInfo } from "../../config/context/userInfoHook";
import { CategoryDropDown } from "./categorydropdown";

export function Navbar() {
  const navigate = useNavigate();
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
  const { userInfo, setUserInfo } = useUserInfo();

  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    async function fetchUser() {
      try {
        if (loggedInUser) {
          const response = await api.get(
            `/user/profile/${loggedInUser.user.username}`
          );
          setUser(response.data);
          setUserInfo(response.data);
        }
      } catch (err) {
        console.log(err);
        navigate("/");
      }
    }

    fetchUser();
  }, [loggedInUser]);

  console.log(user);

  return (
    <div>
      <header
        aria-label="Site Header"
        className="bg-gray-50 shadow-md dark:bg-zinc-800 fixed w-screen z-40"
      >
        <div className="mx-auto  px-4 sm:px-6 lg:px-20">
          <div className="flex h-16 items-center justify-between">
            <div className="flex md:items-center gap-4">
              <Link to="/" className="hidden sm:block text-emerald-600">
                <img src={logo} />
              </Link>
              <Link to="/" className="flex">
                <h1 className="text-2xl font-medium text-emerald-500 transition hover:text-gray-500/75 dark:text-emerald-400 dark:hover:text-emerald-300">
                  Ceos
                </h1>
                <h1 className="text-2xl font-medium text-zinc-700 transition hover:text-gray-500/75 dark:text-gray-200 dark:hover:text-emerald-300">
                  Tab
                </h1>
              </Link>
              <CategoryDropDown loggedInUser={loggedInUser} />
            </div>

            <div className="hidden lg:block">
              <nav aria-label="Site Nav">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <Link
                      className="text-base font-medium text-gray-500 transition hover:text-gray-500/75 dark:text-gray-200 dark:hover:text-emerald-300"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-base font-medium text-gray-500 transition hover:text-gray-500/75 dark:text-gray-200 dark:hover:text-emerald-300"
                      to="/curtidos/1"
                    >
                      Mais Curtidos
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-base font-medium text-gray-500 transition hover:text-gray-500/75 dark:text-gray-200 dark:hover:text-emerald-300"
                      to="/recentes/1"
                    >
                      Recentes
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-base font-medium text-gray-500 transition hover:text-gray-500/75 dark:text-gray-200 dark:hover:text-emerald-300"
                      to="/relevant/1"
                    >
                      Mais Relevantes
                    </Link>
                  </li>
                  {userInfo.username && (
                    <li>
                      <Link
                        className="text-base font-medium text-gray-500 transition hover:text-gray-500/75 dark:text-gray-200 dark:hover:text-emerald-300"
                        to="/feed"
                      >
                        Feed
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
            <div className="flex items-center gap-1">
              {!loggedInUser && (
                <div className="flex gap-4">
                  <Link
                    className="my-auto rounded-md bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                    to="/login"
                  >
                    Login
                  </Link>

                  <div className="hidden sm:flex">
                    <Link
                      className="my-auto rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-emerald-600"
                      to="/sign-up"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              )}
              {loggedInUser && (
                <div className="flex sm:w-24 md:w-48 gap-2 sm:gap-3">
                  <Link
                    to={`/redirect/${userInfo.username}/`}
                    className="flex gap-3"
                  >
                    <img
                      src={userInfo.img}
                      className="w-8 h-8 object-cover rounded-full outline outline-offset-2 outline-2 outline-emerald-500"
                    />
                    <h1 className="dark:text-zinc-100 my-auto hidden md:block ">
                      {userInfo.username}
                    </h1>
                  </Link>
                  <MenuToggle username={userInfo.username} />
                </div>
              )}

              <div className="flex">
                <ToggleButtonTheme />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
