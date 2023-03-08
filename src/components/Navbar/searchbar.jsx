import { useEffect, useRef, useState } from "react";
import { apiNoToken } from "../../config/api/apiNoToken";
import _ from "lodash";
import { TabBoxNavbar } from "../TabBox/tabboxnavbar";

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
      <div
        className="flex flex-col fixed mx-auto right-16 sm:right-40 md:right-72 top-1 w-36 sm:w-60 z-50 "
        ref={searchBarRef}
      >
        <div className="w-28 sm:w-44 absolute">
          <label
            htmlFor="searchBar"
            className="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-emerald-600"
          >
            <input
              type="searchBar"
              id="searchBar"
              placeholder="searchBar"
              className="dark:text-zinc-100 text-zinc-800 peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              onChange={(e) => setSearch(e.target.value.replaceAll(" ", "%20"))}
            />

            <span className="absolute left-0 top-2 -translate-y-1/2 text-xs text-emerald-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-emerald-600 peer-focus:text-emerald-800 peer-focus:top-2 peer-focus:text-xs">
              <p>Search</p>
            </span>
          </label>
        </div>
        <div className=" h-auto mt-16 w-80 ">
          {results.length > 0 && (
            <div className="flex flex-col gap-2">
              {results.map((currentElement) => {
                return <TabBoxNavbar tab={currentElement} />;
              })}
            </div>
          )}
        </div>
      </div>
      {results.length > 0 && (
        <div className="fixed inset-0 bg-black/20 w-screen h-screen transition-all z-10"></div>
      )}
    </>
  );
}
