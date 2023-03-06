import { useState } from "react";
import { api } from "../../config/api/api.jsx";
import logo from "../../assets/images/logotipo/logo.svg";
import { Link, useNavigate } from "react-router-dom";

export function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [img, setImg] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleImage(e) {
    setImg(e.target.files[0]);
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

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const imgURL = await handleUpload();
      await api.post("/user/sign-up", { ...form, img: imgURL });
      // await api.post("/user/sign-up", { ...form });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex">
      <div className="w-1/2">
        <h1>Adicionar logo bonitinho</h1>
      </div>
      <div className="w-1/2 h-4/6 flex items-center justify-center py-10">
        <div className="-mt-20 w-11/12 sm:w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-zinc-800">
          <div className="px-6 py-4">
            <h3 className="mt-3 text-xl font-medium text-center text-zinc-600 dark:text-emerald-400">
              Crie sua Conta
            </h3>

            <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
              Preencha as informações abaixo para se cadastrar.
            </p>

            <form onSubmit={handleSubmit}>
              <div>
                <label
                  for="formImg"
                  class="flex flex-col items-center w-full max-w-lg p-3 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-zinc-800 dark:border-gray-700  rounded-xl"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-8 h-8 text-gray-500 dark:text-gray-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                    />
                  </svg>

                  <h2 class="mt-1 font-medium tracking-wide text-zinc-700 dark:text-gray-200">
                    Foto de Perfil
                  </h2>

                  <p class="mt-2 text-xs tracking-wide text-zinc-500 dark:text-gray-400">
                    Arraste ou selecione uma imagem em PNG ou JPG.
                  </p>

                  <input
                    id="formImg"
                    type="file"
                    class="hidden"
                    onChange={handleImage}
                  />
                </label>
              </div>

              <div className="w-full mt-4">
                <input
                  type="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 dark:text-gray-200 placeholder-gray-500 bg-white border rounded-lg dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-emerald-400 dark:focus:border-emerald-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-emerald-300"
                />
              </div>
              <div className="w-full mt-4">
                <input
                  type="username"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  placeholder="Seu username"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 dark:text-gray-200 placeholder-gray-500 bg-white border rounded-lg dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-emerald-400 dark:focus:border-emerald-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-emerald-300"
                />
              </div>
              <div className="w-full mt-4">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Preencha seu E-mail"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 dark:text-gray-200 placeholder-gray-500 bg-white border rounded-lg dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-emerald-400 dark:focus:border-emerald-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-emerald-300"
                />
              </div>

              <div className="w-full mt-4">
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Escolha uma senha..."
                  className="block w-full px-4 py-2 mt-2 text-gray-700 dark:text-gray-200 placeholder-gray-500 bg-white border rounded-lg dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-emerald-400 dark:focus:border-emerald-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-emerald-300"
                />
              </div>
              <div className="w-full mt-4">
                <input
                  id="formConfirmPassword"
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirme sua senha..."
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
                  className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-emerald-500 rounded-lg hover:bg-emerald-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>

          <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-emerald-600">
            <span className="text-sm  text-gray-600 dark:text-zinc-700 dark:font-semibold">
              Já tem uma conta?{" "}
            </span>

            <Link
              to="/login"
              className="mx-2 text-sm font-bold text-zinc-700 dark:text-zinc-100 hover:underline"
            >
              Acesse
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
