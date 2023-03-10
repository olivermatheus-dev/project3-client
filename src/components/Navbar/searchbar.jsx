import { useEffect, useRef, useState } from "react";
import { apiNoToken } from "../../config/api/apiNoToken";
import _ from "lodash";
import { TabBoxNavbar } from "../TabBox/tabboxnavbar";
import { Link } from "react-router-dom";

export function SearchBar() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const debouncedSearch = _.debounce(searchContent, 500); // debounce de 500ms
  const searchBarRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
      setResults([]);
    }
  };

  useEffect(() => {
    if (search !== "") {
      debouncedSearch();
    } else {
      setResults([]);
    }
  }, [search]);

  async function searchContent() {
    try {
      const response = await apiNoToken.get(`/searchbar/${search}`);
      setResults(response.data);
    } catch (error) {
      console.log(error);
      setResults([]);
    }
  }

  return (
    <>
      <div className="flex flex-col w-52 sm:w-72 z-50 " ref={searchBarRef}>
        <div className=" sm:w-96 absolute">
          <label
            htmlFor="searchBar"
            className="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-emerald-600"
          >
            <input
              type="searchBar"
              id="searchBar"
              placeholder="searchBar"
              className="dark:text-zinc-100 text-zinc-800 peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              onChange={(e) => setSearch(e.target.value)}
            />

            <span className="absolute left-0 top-2 -translate-y-1/2 text-xs text-emerald-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-emerald-600 peer-focus:text-emerald-500 peer-focus:top-2 peer-focus:text-xs">
              <p>Search</p>
            </span>
          </label>
        </div>
        <div className=" h-auto mt-16 w-80 ">
          {results.length > 0 && (
            <>
              <div className="flex flex-col gap-2 absolute z-20">
                {results.map((currentElement) => {
                  return (
                    <div>
                      {currentElement.authorId ? (
                        <TabBoxNavbar tab={currentElement} />
                      ) : (
                        <Link to={`/profile/${currentElement.username}/user`}>
                          <div className="hover:scale-105 transition duration-300 w-[250px] h-10 bg-emerald-500 dark:bg-emerald-600 rounded-md flex gap-1 shadow-xl">
                            <Link
                              to={`/profile/${currentElement.username}/user`}
                              className="flex items-center gap-2 "
                            >
                              <img
                                className=" object-cover w-6 h-6 ml-3.5 rounded-full sm:block"
                                src={currentElement.img}
                                alt="avatar"
                              />
                              <div
                                className="font-semibold text-sm text-zinc-700 cursor-pointer dark:text-gray-200"
                                role="link"
                              >
                                @{currentElement.username}
                              </div>
                            </Link>
                          </div>
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
      {results.length > 0 && (
        <div className="fixed inset-0 bg-black/20 w-screen h-screen transition-all z-10" />
      )}
    </>
  );
}
