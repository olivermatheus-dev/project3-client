import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../config/api/api.jsx";

export function TabComment({ comments, setUpdatePage, user }) {
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
      //
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(e) {
    try {
      await api.delete(`/comment/delete/${e.target.value}`);
      setUpdatePage((state) => {
        return !state;
      });
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
      <div>
        <div className="h-screen flex items-center justify-center">
          <div className="-mt-20 w-5/6 sm:w-4/6  h-5/6  sm:h-6/6 mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-zinc-800">
            <div className="px-6 py-4">
              <div className="flex justify-center mx-auto"></div>

              <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
                Comentários
              </p>
              {comments &&
                comments.map((comment) => {
                  return (
                    <div className="container flex">
                      <div className="dark:text-zinc-50">
                        @{comment.authorId.username}: {comment.content}
                      </div>

                      {comment.authorId === userId && (
                        <button
                          className="bg-red-500 py-2 px-3 rounded-lg"
                          onClick={handleDelete}
                          value={comment._id}
                        >
                          delete
                        </button>
                      )}
                    </div>
                  );
                })}
              {userId && (
                <form onSubmit={handleSubmit}>
                  <div className="flex gap-5">
                    <div className="w-full mt-4">
                      <input
                        type="text"
                        name="content"
                        value={content}
                        placeholder="Comente aqui!"
                        onChange={(e) => setContent(e.target.value)}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 dark:text-gray-200 placeholder-gray-500 bg-white border rounded-lg dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-emerald-400 dark:focus:border-emerald-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-emerald-300"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-center mt-4">
                    <button
                      type="submit"
                      className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-emerald-500 rounded-lg hover:bg-emerald-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                      Criar Comentário
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
