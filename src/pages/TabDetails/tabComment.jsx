import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../config/api/api.jsx";
import { CommentBox } from "./commentbox.jsx";

export function TabComment({ comments, setUpdatePage }) {
  const [content, setContent] = useState("");
  const params = useParams();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post(`/comment/create/${params.tabId}`, {
        content: content,
      });
      setUpdatePage((state) => {
        return !state;
      });
      setContent("");
    } catch (error) {
      console.log(error);
    }
  }

  let userId;
  if (localStorage.getItem("loggedInUser")) {
    userId = JSON.parse(localStorage.getItem("loggedInUser") || '""').user._id;
  }

  return (
    <>
      <div className="py-20 flex items-center justify-center">
        <div className="-mt-20 h-full w-5/6 sm:w-[500px] md:w-[600px] lg:w-[800px] mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-zinc-800">
          <div className="px-8 py-8 flex flex-col gap-5">
            <h1 className="font-semibold text-emerald-500 dark:text-emerald-500 text-xl w-5/6 sm:w-[500px] ">
              Comentários
            </h1>
            {comments &&
              comments.map((comment) => {
                return (
                  <CommentBox
                    comment={comment}
                    userId={userId}
                    setUpdatePage={setUpdatePage}
                  />
                );
              })}
            {userId && (
              <form onSubmit={handleSubmit} className="flex w-full justify-end">
                <input
                  type="text"
                  name="content"
                  value={content}
                  placeholder="Comente aqui!"
                  onChange={(e) => setContent(e.target.value)}
                  className="rounded-l-lg w-5/6 sm:w-[500px] py-2 mt-2 h-12 text-gray-700 dark:text-gray-200 placeholder-gray-500 bg-white border dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400  focus:outline-none focus:ring-0"
                />

                <button
                  type="submit"
                  className="rounded-r-lg flex items-center justify-center h-12 mt-2  w-16 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-emerald-500  hover:bg-emerald-400 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6  "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
