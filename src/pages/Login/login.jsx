import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../config/api/api.jsx";
import { AuthContext } from "../../config/context/authContext.jsx";
import logo from "../../assets/images/logotipo/logo.svg";
import { motion } from "framer-motion";

export function Login() {
  const [form, setForm] = useState({
    emailOrUsername: "",
    password: "",
  });
  const [loginCheck, setLoginCheck] = useState("");

  const navigate = useNavigate();

  const { setLoggedInUser } = useContext(AuthContext);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/user/login", form);
      setLoggedInUser({ ...response.data });

      localStorage.setItem("loggedInUser", JSON.stringify(response.data));

      navigate(`/profile/${response.data.user.username}/user`);

      //
    } catch (error) {
      console.log(error);
      setLoginCheck(error.response.data);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="w-full  h-screen sm:w-[700px] md:w-[850px] lg:w-[1200px] flex items-center justify-center">
        <div className="-mt-44  w-[350px] max-w-sm mx-auto overflow-hidden bg-white/70 rounded-lg shadow-md dark:bg-zinc-800/70">
          <div className="px-6 py-4">
            <div className="flex justify-center mx-auto">
              <img className="h-8 sm:h-20" src={logo} alt="" />
            </div>

            <h3 className="mt-3 text-xl font-medium text-center text-zinc-600 dark:text-gray-200">
              Welcome Back
            </h3>

            <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
              Login or create account
            </p>

            <form onSubmit={handleSubmit}>
              <div className="w-full mt-4">
                <input
                  type="text"
                  name="emailOrUsername"
                  value={form.emailOrUsername}
                  placeholder="Seu e-mail ou seu username"
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 dark:text-gray-200 placeholder-gray-500 bg-white border rounded-lg dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-emerald-400 dark:focus:border-emerald-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-emerald-300"
                />
                {loginCheck && (
                  <p className="text-red-500 font-semibold text-sm pl-2">
                    *Senha, username ou e-mail incorreto
                  </p>
                )}
              </div>

              <div className="w-full mt-4">
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  placeholder="Digite sua senha..."
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 dark:text-gray-200 placeholder-gray-500 bg-white border rounded-lg dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-emerald-400 dark:focus:border-emerald-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-emerald-300"
                />
              </div>

              <div className="flex items-center justify-between mt-4">
                <a
                  href="#"
                  className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500"
                >
                  Forget Password?
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
              Ainda não tem uma conta?{" "}
            </span>

            <Link
              to="/sign-up"
              className="mx-2 text-sm font-bold text-zinc-700 dark:text-zinc-100 hover:underline"
            >
              Clique aqui
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
