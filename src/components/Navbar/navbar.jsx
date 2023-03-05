import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logotipo/logo.svg";
import { ToggleButtonTheme } from "./toggleTheme.jsx";
export function Navbar() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, []);

  return (
    <>
      <header aria-label="Site Header" className="bg-white dark:bg-zinc-800">
        <div className="mx-auto  px-4 sm:px-6 lg:px-20">
          <div className="flex h-16 items-center justify-between">
            <div className="flex md:items-center gap-4">
              <Link to="/" className="block text-emerald-600" href="/">
                <span className="sr-only dark:text-white">Home</span>

                <img src={logo} />
              </Link>
              <div className="flex">
                <h1 className="text-2xl font-medium text-emerald-500 transition hover:text-gray-500/75 dark:text-emerald-400 dark:hover:text-emerald-300">
                  Ceos
                </h1>
                <h1 className="text-2xl font-medium text-zinc-700 transition hover:text-gray-500/75 dark:text-gray-200 dark:hover:text-emerald-300">
                  Tab
                </h1>
              </div>
            </div>

            <div className="hidden md:block">
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
                      to="/"
                    >
                      Mais Curtidos
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
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
                <div className="hidden sm:flex">
                  <ToggleButtonTheme />
                </div>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
