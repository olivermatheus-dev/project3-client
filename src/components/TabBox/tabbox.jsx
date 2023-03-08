import { Link } from "react-router-dom";
import { dateConverter } from "../../config/functions/dateConverter.js";

export function TabBox({ tab }) {
  return (
    <>
      <div className="max-w-2xl sm:w-[700px] px-8 py-3 bg-white rounded-lg dark:bg-zinc-800  shadow-md hover:scale-105 transition duration-300 ease-in-out">
        <div className="flex items-center justify-between mt-1">
          <span className="text-xs font-light text-gray-600 dark:text-gray-400">
            {dateConverter(tab.createdAt)}
          </span>
          <div
            className="z-0 px-3  text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-emerald-600 rounded cursor-pointer hover:bg-gray-500"
            role="button"
          >
            {tab.category.toUpperCase()}
          </div>
        </div>

        <div className="">
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
          <div className="w-2/5">
            <Link
              className="text-emerald-600 dark:text-emerald-400 hover:underline"
              role="link"
              to={`/tab/${tab._id}`}
            >
              Leia mais
            </Link>
          </div>
          <div className="flex items-center text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700 dark:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
            <span className="flex">
              <p className="ml-1 font-bold text-gray-700 dark:text-gray-200 hidden sm:block">
                {tab.commentsId.length}
              </p>
              <p className="ml-1 font-bold text-gray-700 dark:text-gray-200 hidden sm:block">
                comments
              </p>
            </span>
          </div>

          <Link
            to={`/profile/${tab.authorId.username}/user`}
            className="flex items-center"
          >
            <img
              className=" object-cover  w-5 h-5  sm:w-8 sm:h-8  mx-1  sm:mx-4 rounded-full sm:block"
              src={tab.authorId.img}
              alt="avatar"
            />
            <div
              className="font-bold text-gray-700 cursor-pointer dark:text-gray-200"
              role="link"
            >
              @{tab.authorId.username}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
