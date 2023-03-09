import { Link, useParams } from "react-router-dom";
import { dateConverter } from "../../config/functions/dateConverter.js";
import { tagsModelation } from "../../config/functions/tagsModelation.js";
import { useUserInfo } from "../../config/context/userInfoHook.jsx";

export function TabBoxProfile({ tab, user }) {
  const { userInfo } = useUserInfo();
  const params = useParams();
  return (
    <>
      <div className="max-w-2xl  px-8 py-3  bg-zinc-50 rounded-lg dark:bg-zinc-800  shadow-md hover:scale-105 transition duration-300 ease-in-out">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-zinc-600 dark:text-zinc-400">
            {dateConverter(tab.createdAt)}
          </span>
          <div
            className="z-0 px-3 text-zinc-700 text-xs font-bold transition-colors duration-300 transform bg-emerald-500 rounded cursor-pointer hover:bg-gray-500"
            role="button"
          >
            {tab.category.toUpperCase()}
          </div>
        </div>

        <div className="mt-1">
          <Link
            to={`/tab/${tab._id}`}
            className="text-lg font-bold text-zinc-700 dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-200 hover:underline"
            role="link"
          >
            {tab.title}
          </Link>
          <p
            dangerouslySetInnerHTML={{ __html: tab.content }}
            className="text-sm mt-2 text-zinc-600 dark:text-zinc-300 line-clamp-2"
          />
        </div>
        <div className="flex justify-between mt-2 ">
          <div className="flex gap-1 ">
            {tagsModelation(tab.tags)
              .slice(0, 6)
              .map((e) => {
                return (
                  <p
                    key={Math.random()}
                    className="text-sm italic font-semibold text-emerald-600 dark:text-emerald-400 "
                  >
                    {e}
                  </p>
                );
              })}
          </div>
          {userInfo &&
            (userInfo.username === params.username ||
              userInfo.role === "ADMIN") && (
              <div className="flex gap-1 px-3 py-[2px] bg-emerald-500 dark:bg-zinc-500 rounded-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -2 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-zinc-700 dark:text-emerald-400"
                >
                  <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
                </svg>

                <p className="text-sm  font-semibold text-zinc-700 dark:text-emerald-400 ">
                  {tab.likesUserId.length} lamps
                </p>
                <p className="text-sm  font-semibold text-zinc-700 dark:text-emerald-400">
                  {tab.viewsDetails} views
                </p>
              </div>
            )}
        </div>

        <div className="flex items-center justify-between mt-4"></div>
      </div>
    </>
  );
}
