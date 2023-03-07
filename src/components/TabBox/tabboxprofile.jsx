import { Link } from "react-router-dom";
import { dateConverter } from "../../config/functions/dateConverter.js";

export function TabBoxProfile({ tab }) {
  return (
    <>
      <div className="max-w-2xl sm:w-[700px] px-8 py-3 bg-white rounded-lg dark:bg-zinc-800  shadow-md hover:scale-105 transition duration-300 ease-in-out">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-600 dark:text-gray-400">
            {dateConverter(tab.createdAt)}
          </span>
          <div
            className="z-0 px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
            role="button"
          >
            {tab.category.toUpperCase()}
          </div>
        </div>

        <div className="mt-1">
          <Link
            to={`/tab/${tab._id}`}
            className="text-lg font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
            role="link"
          >
            {tab.title}
          </Link>
          <p
            dangerouslySetInnerHTML={{ __html: tab.content }}
            className="text-sm mt-2 text-gray-600 dark:text-gray-300 line-clamp-2"
          ></p>
        </div>

        <div className="flex items-center justify-between mt-4"></div>
      </div>
    </>
  );
}
