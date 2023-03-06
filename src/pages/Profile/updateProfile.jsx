import { useState, useEffect } from "react";
import { api } from "../../config/api/api.jsx";

export function UpdateProfile({ setUpdated, updated }) {
  const storedUser = localStorage.getItem("loggedInUser");
  const [userForm, setUserForm] = useState({
    name: "seu nome",
    username: "seu user",
  });
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await api.get("/user/profile");
        setUserForm({ ...response.data });
      } catch (err) {
        console.log(err);
      }
    }
    fetchUser();
  }, [updated]);

  function handleChange(e) {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.put("/user/update", { ...userForm });
      setUpdated(!updated);
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
