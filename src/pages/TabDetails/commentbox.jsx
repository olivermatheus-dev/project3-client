import { Link } from "react-router-dom";
import { dateConverter } from "../../config/functions/dateConverter";
import { api } from "../../config/api/api";

export function CommentBox({ comment, userId, setUpdatePage }) {
  // console.log(comment);

  async function handleDelete() {
    try {
      await api.delete(`/comment/delete/${comment._id}`);
      setUpdatePage((state) => {
        return !state;
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="max-w-2xl sm:w-[700px] px-8 py-3 bg-zinc-50 rounded-lg dark:bg-zinc-700  shadow-md  transition duration-300 ease-in-out">
        <div className="flex items-center justify-between">
          <span className="text-xs font-light text-gray-600 dark:text-gray-400">
            {dateConverter(comment.createdAt)}
          </span>
          {comment.authorId._id === userId && (
            <button
              className=" w-7 h-7 dark:hover:bg-white/40 hover:bg-black/40 rounded-sm flex items-center justify-center transition"
              onClick={handleDelete}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 dark:text-white/80 text-black/80 hover:text-black dark:hover:text-white transition"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          )}
        </div>

        <div className="mt-1">
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
            {comment.content}
          </p>
        </div>

        <div className="flex items-center justify-end ">
          <Link
            to={`/profile/${comment.authorId.username}/user`}
            className="flex items-center"
          >
            <img
              className=" object-cover  w-5 h-5  sm:w-6 sm:h-6  mx-1  sm:mx-3 rounded-full sm:block"
              src={comment.authorId.img}
              alt="avatar"
            />
            <div
              className="font-medium text-gray-700 cursor-pointer dark:text-gray-200"
              role="link"
            >
              @{comment.authorId.username}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
