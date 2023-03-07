import { useState, useEffect } from "react";
import { api } from "../../config/api/api.jsx";
import { useParams } from "react-router-dom";

export function UpdateProfile({ setUpdated, updated, setIsOpen }) {
  const storedUser = localStorage.getItem("loggedInUser");
  const params = useParams();
  const [userForm, setUserForm] = useState({
    name: "seu nome",
    username: "seu user",
  });
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await api.get(`/user/profile/${params.username}`);
        setUserForm({ ...response.data });
      } catch (err) {
        console.log(err);
      }
    }
    fetchUser();
  }, [updated]);
  //

  const [imageUploaded, setImageUploaded] = useState(false);

  const [img, setImg] = useState("");

  function handleImage(e) {
    setImg(e.target.files[0]);
    setImageUploaded(true);
  }

  async function handleUpload() {
    try {
      const uploadData = new FormData();
      uploadData.append("img", img);

      const response = await api.post("/upload", uploadData);

      return response.data.url;
    } catch (error) {
      console.log(error);
    }
  }

  //
  function handleChange(e) {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const imgURL = await handleUpload();
      await api.put("/user/update", { ...userForm, img: imgURL });
      setUpdated(!updated);
      setIsOpen((state) => !state);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className="px-6 py-4">
        <h3 className="mt-3 text-xl font-medium text-center text-zinc-600 dark:text-emerald-400">
          Atualize suas informações
        </h3>

        <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
          Mantenha seu perfil sempre atualizado.
        </p>

        <form onSubmit={handleSubmit}>
          {!imageUploaded && (
            <div>
              <label
                htmlFor="formImg"
                className="flex flex-col items-center w-full max-w-lg p-3 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-zinc-800 dark:border-gray-700  rounded-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 text-gray-500 dark:text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>

                <h2 className="mt-1 font-medium tracking-wide text-zinc-700 dark:text-gray-200">
                  Foto de Perfil
                </h2>

                <p className="mt-2 text-xs tracking-wide text-zinc-500 dark:text-gray-400">
                  Selecione uma imagem em PNG ou JPG. (clique aqui)
                </p>

                <input
                  id="formImg"
                  type="file"
                  className="hidden"
                  onChange={handleImage}
                />
              </label>
            </div>
          )}
          {imageUploaded && (
            <div>
              <label
                htmlFor="formImg"
                className="flex flex-col items-center w-full max-w-lg p-3 mx-auto mt-2 text-center bg-white border-2 border-emerald-500  cursor-pointer dark:bg-zinc-800 dark:border-gray-700  rounded-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 text-emerald-500 dark:text-emerald-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <h2 className="mt-1 font-medium tracking-wide text-zinc-700 dark:text-gray-200">
                  Foto de Perfil
                </h2>

                <p className="mt-2 text-xs tracking-wide text-zinc-500 dark:text-gray-400">
                  Upload realizado com sucesso!
                </p>

                <input
                  id="formImg"
                  type="file"
                  className="hidden"
                  onChange={handleImage}
                />
              </label>
            </div>
          )}
          <div className="w-full mt-4">
            <input
              type="name"
              name="name"
              value={userForm.name}
              onChange={handleChange}
              placeholder="Seu nome"
              className="block w-full px-4 py-2 mt-2 text-gray-700 dark:text-gray-200 placeholder-gray-500 bg-white border rounded-lg dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-emerald-400 dark:focus:border-emerald-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-emerald-300"
            />
          </div>
          <div className="w-full mt-4">
            <input
              type="username"
              name="username"
              value={userForm.username}
              onChange={handleChange}
              placeholder="Seu username"
              className="block w-full px-4 py-2 mt-2 text-gray-700 dark:text-gray-200 placeholder-gray-500 bg-white border rounded-lg dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-emerald-400 dark:focus:border-emerald-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-emerald-300"
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            <a
              href="#"
              className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500"
            >
              Falta preencher
            </a>

            <button
              type="submit"
              className="px-6 py-2 text-sm font-medium tracking-wide dark:text-zinc-800 capitalize transition-colors duration-300 transform bg-emerald-500 rounded-lg hover:bg-emerald-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              Atualizar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
