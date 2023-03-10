import { Link } from "react-router-dom";

export function TabBoxNavbar({ tab }) {
  return (
    <Link to={`/tab/${tab._id}`} className="">
      <div className="w-[250px] flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800 rounded-md px-4 py-2  shadow-md  relative overflow-hidden transition duration-300 hover:scale-105">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 pr-1 dark:text-emerald-500 text-emerald-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
          />
        </svg>
        {tab.title.length > 35 ? (
          <h1 className="text-zinc-800 dark:text-zinc-100 transition-all text-sm ">
            {tab.title.slice(0, 35)}...
          </h1>
        ) : (
          <h1 className="text-zinc-800 dark:text-zinc-100 transition-all  text-sm">
            {tab.title}
          </h1>
        )}
      </div>
    </Link>
  );
}
