import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { api } from "../../config/api/api";

function TextEditor({ setValue, value }) {
  return (
    <div className="mb-10">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        style={{ height: "200px" }}
      />
    </div>
  );
}

export function ModalCreate({ isOpen, setIsOpen, setReload, setIsLoading }) {
  const params = useParams();
  const navigate = useNavigate();

  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  // function handleChange({ target }) {
  //   setForm({ ...form, [target.name]: target.value });
  // }
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      // const infosForAPI = { data: { ...form } };
      const postData = {
        author,
        title,
        content,
        image: "",
        category,
        likesCounter: 0,
      };

      await api.post(`/tabs/`, { data: postData });

      setIsOpen(false);
      setIsLoading((isLoading) => {
        return !isLoading;
      });
      setReload((reload) => {
        return !reload;
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {isOpen && (
        <>
          <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 h-screen">
            <div className="bg-white px-4 py-14 rounded-md text-center">
              <h1 className="text-xl mb-4 font-bold text-slate-500">
                Crie sua tab!
              </h1>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col w-80 sm:w-128"
              >
                <div className="ml-1 text-left">
                  <label
                    htmlFor="author"
                    className=" text-xs font-medium text-gray-700"
                  >
                    Your name:
                  </label>
                  <input
                    type="text"
                    id="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    name="author"
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    placeholder="Coloque seu nome"
                  />
                </div>
                <div className="ml-1 text-left">
                  <label
                    htmlFor="title"
                    className="ml-1 text-left text-xs font-medium text-gray-700"
                  >
                    Title:
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    name="title"
                    placeholder="Título do tab"
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </div>
                <div className="ml-1 text-left">
                  <label
                    htmlFor="content"
                    className="ml-1 text-left text-xs font-medium text-gray-700"
                  >
                    Content:
                  </label>
                </div>
                <TextEditor value={content} setValue={setContent} />
                <div className="ml-1 text-left">
                  <label
                    htmlFor="category"
                    className="ml-1 text-left text-xs font-medium text-gray-700"
                  >
                    Category:
                  </label>

                  <select
                    value={category}
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="category"
                    name="category"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">Selecione uma categoria</option>
                    <option value="react">React</option>
                    <option value="javascript">JavaScript</option>
                    <option value="nextjs">NextJs</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
                <div className="flex items-center mt-3 mb-2 flex-col gap-2">
                  <input
                    className="w-36 cursor-pointer inline-block rounded border border-sky-400 bg-sky-400 px-10 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-sky-400 focus:outline-none focus:ring active:text-sky-400"
                    type={"submit"}
                    onClick={() => {
                      return handleSubmit;
                    }}
                    value="Criar"
                  />
                </div>
              </form>

              <button
                className="bg-indigo-400 px-4 py-2 rounded-md text-md text-white"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Fechar
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
