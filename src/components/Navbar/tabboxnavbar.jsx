import { Link } from "react-router-dom";

export function TabBoxNavbar({ tab }) {
  return (
    <Link to={`/tab/${tab._id}`} className="">
      <div className="bg-zinc-100 dark:bg-zinc-800 rounded-md px-4 py-2  shadow-md  block relative overflow-hidden transition duration-300 hover:scale-105">
        <div>
          <h1 className="text-zinc-800 dark:text-zinc-100 transition-all line-clamp-2">
            {tab.title}
          </h1>
        </div>
      </div>
    </Link>
  );
}
