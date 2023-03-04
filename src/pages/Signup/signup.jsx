import { useState } from "react";
import { api } from "../../config/api/api.jsx";
import logo from "../../assets/images/logotipo/logo.svg";
import { Link, useNavigate } from "react-router-dom";

export function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
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

  //   async function handleUpload() {
  //     try {
  //       const uploadData = new FormData();
  //       uploadData.append("picture", img);

  //       const response = await api.post("/upload-image", uploadData);

  //       return response.data.url;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      //   const imgURL = await handleUpload();
      //   await api.post("/user/signup", { ...form, img: imgURL });
      await api.post("/user/sign-up", { ...form });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    // <form onSubmit={handleSubmit}>
    //   <label htmlFor="formName">Nome:</label>
    //   <input
    //     id="formName"
    //     name="name"
    //     type="text"
    //     value={form.name}
    //     onChange={handleChange}
    //   />
    //   {/* <label htmlFor="formImg">Sua foto de perfil:</label>
    //   <input type="file" id="formImg" onChange={handleImage} /> */}

    //   <label htmlFor="formEmail">E-mail:</label>
    //   <input
    //     id="formEmail"
    //     name="email"
    //     type="email"
    //     value={form.email}
    //     onChange={handleChange}
    //   />
    //   <label htmlFor="formPassword">Senha:</label>
    //   <input
    //     id="formPassword"
    //     name="password"
    //     type="password"
    //     value={form.password}
    //     onChange={handleChange}
    //   />
    //   <label htmlFor="formConfirmPassword">Confirmação de senha</label>
    //   <input
    //     id="formConfirmPassword"
    //     type="password"
    //     name="confirmPassword"
    //     value={form.confirmPassword}
    //     onChange={handleChange}
    //   />
    //   <button type="submit">Cadastrar</button>
    // </form>
    <div className="h-screen flex items-center justify-center">
      <div className="-mt-20 w-11/12 sm:w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-zinc-800">
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
                type="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Seu nome"
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-emerald-400 dark:focus:border-emerald-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-emerald-300"
              />
            </div>
            <div className="w-full mt-4">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Preencha seu E-mail"
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-emerald-400 dark:focus:border-emerald-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-emerald-300"
              />
            </div>

            <div className="w-full mt-4">
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Escolha uma senha..."
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-emerald-400 dark:focus:border-emerald-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-emerald-300"
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
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-emerald-400 dark:focus:border-emerald-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-emerald-300"
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
            Don't have an account?{" "}
          </span>

          <Link
            to="/sign-up"
            className="mx-2 text-sm font-bold text-zinc-700 dark:text-zinc-100 hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
