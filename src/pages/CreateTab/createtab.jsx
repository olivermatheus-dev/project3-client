import { useContext, useState } from "react";
import { api } from "../../config/api/api";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../config/context/authContext";

import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

function TextEditor({ setValue, value }) {
  return (
    <div className="mb-10 dark:text-white py-4">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        style={{ height: "200px" }}
      />
    </div>
  );
}

export function CreateTab() {
  const navigate = useNavigate();
  const { setLoggedInUser } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const data = { title: title, category: category, content: content };
      const response = await api.post("/tab/create", data);
      navigate("/");

      //
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>
        <div className="h-screen flex items-center justify-center">
          <div className="-mt-20 w-5/6 sm:w-4/6  h-5/6  sm:h-6/6 mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-zinc-800">
            <div className="px-6 py-4">
              <div className="flex justify-center mx-auto"></div>

              <h3 className="mt-3 text-xl font-medium text-center text-zinc-600 dark:text-gray-200">
                Crie o seu tab
              </h3>

              <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
                Preencha as informações para criar o seu tab.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="flex gap-5">
                  <div className="w-full mt-4">
                    <input
                      type="text"
                      name="title"
                      value={title}
                      placeholder="Título do tab"
                      onChange={(e) => setTitle(e.target.value)}
                      className="block w-full px-4 py-2 mt-2 text-gray-700 dark:text-gray-200 placeholder-gray-500 bg-white border rounded-lg dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-emerald-400 dark:focus:border-emerald-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-emerald-300"
                    />
                  </div>

                  <div className="w-full mt-4">
                    <select
                      value={category}
                      className="block w-full px-4 py-2 mt-2 text-gray-700 dark:text-gray-200 placeholder-gray-500 bg-white border rounded-lg dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-emerald-400 dark:focus:border-emerald-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-emerald-300"
                      id="category"
                      name="category"
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="outro">Selecione uma categoria</option>
                      <option value="react">React</option>
                      <option value="javascript">JavaScript</option>
                      <option value="nextjs">NextJs</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>
                </div>
                <div>
                  <TextEditor value={content} setValue={setContent} />
                </div>
                <div className="flex items-center justify-center mt-4">
                  <button
                    type="submit"
                    className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-emerald-500 rounded-lg hover:bg-emerald-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    Criar Tab
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
