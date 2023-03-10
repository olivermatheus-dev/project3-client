import { useState, useEffect } from "react";
import { api } from "../../config/api/api.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

export function TabUpdate({ setUpdatePage, updatePage, setIsOpen }) {
  const [content, setContent] = useState("");
  const params = useParams();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await api.get(`/tab/details/${params.tabId}`);

        setTitle(response.data.title);
        setCategory(response.data.category);
        setTags(response.data.tags);
        setContent(response.data.content);
      } catch (err) {
        console.log(err);
      }
    }
    fetchUser();
  }, [updatePage]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.put(`/tab/update/${params.tabId}`, {
        title: title,
        category: category,
        tags: tags,
        content: content,
      });
      setUpdatePage(!updatePage);
      setIsOpen((state) => !state);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDelete() {
    try {
      await api.delete(`/tab/delete/${params.tabId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="px-6 w-full">
          <h3 className=" text-xl font-medium text-center text-zinc-600 dark:text-emerald-400">
            Atualize sua Tab
          </h3>

          <form>
            <div className="flex flex-col sm:gap-2 sm:flex-row ">
              <div className="w-full mt-2">
                <input
                  type="text"
                  name="title"
                  value={title}
                  placeholder="Título do tab"
                  onChange={(e) => setTitle(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 dark:text-gray-200 placeholder-gray-500 bg-white border rounded-lg dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-emerald-400 dark:focus:border-emerald-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-emerald-300"
                />
              </div>

              <div className="w-full mt-2">
                <select
                  value={category}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 dark:text-gray-200 placeholder-gray-500 bg-white border rounded-lg dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-emerald-400 dark:focus:border-emerald-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-emerald-300"
                  id="category"
                  name="category"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="outro">Categoria</option>
                  <option value="Tecnologia">Tecnologia</option>
                  <option value="Front-End">Front-End</option>
                  <option value="Back-End">Back-End</option>
                  <option value="Estilização">Estilização</option>
                  <option value="Java">Java</option>
                  <option value="React">React</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="Bibliotecas">Bibliotecas</option>
                  <option value="Angular">Angular</option>
                  <option value="VueJs">VueJs</option>
                  <option value="NextJs">NextJs</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>
              <div className="w-full mt-2">
                <input
                  type="text"
                  name="tags"
                  value={tags}
                  placeholder="Adicione tags para os seus tabs"
                  onChange={(e) => setTags(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 dark:text-gray-200 placeholder-gray-500 bg-white border rounded-lg dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-emerald-400 dark:focus:border-emerald-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-emerald-300"
                />
              </div>
            </div>
            <div>
              <div className="mb-10 dark:text-white py-4">
                <ReactQuill
                  theme="snow"
                  value={content}
                  onChange={setContent}
                  style={{ height: "200px" }}
                />
              </div>
            </div>
            <div className="flex items-center justify-center  mt-20 sm:mt-4 gap-3 "></div>
          </form>
          <div className="w-full flex justify-between ">
            <button
              onClick={handleDelete}
              className="px-6 py-2  text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-red-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              Deletar
            </button>
            <button
              onClick={handleSubmit}
              type="submit"
              className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-emerald-500 rounded-lg hover:bg-emerald-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              Atualizar
            </button>
          </div>
        </div>
      </motion.div>
      <style>
        {`
        .quill {
          border: none;
        }
        .quill .ql-toolbar {
          border: none;        
          border-radius: 10px 10px 0px 0px;
        }
        .dark .quill .ql-toolbar {
          background-color: #181818;
        }
        .quill .ql-toolbar {
          background-color: #eee;
        }
        .quill .ql-container {
          border: none;
          overflow: auto;
        }
        .quill .ql-container {
          background-color: #f8f8f8;
        }
        .dark .quill .ql-container {
          background-color: #333;
        }
    `}
      </style>
    </>
  );
}
