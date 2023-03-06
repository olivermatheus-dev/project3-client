import { Link } from "react-router-dom";
import { dateConverter } from "../../config/functions/dateConverter.js";

export function TabBox({ tab }) {
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

        <div className="flex items-center justify-between mt-4">
          <Link
            className="text-emerald-600 dark:text-emerald-400 hover:underline"
            role="link"
            to={`/tab/${tab._id}`}
          >
            Read more
          </Link>

          <div className="flex items-center">
            <img
              className=" object-cover  w-6 h-6  sm:w-10 sm:h-10  mx-1  sm:mx-4 rounded-full sm:block"
              src={tab.authorId.img}
              alt="avatar"
            />
            <a
              className="font-bold text-gray-700 cursor-pointer dark:text-gray-200"
              role="link"
            >
              {tab.authorId.name}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
