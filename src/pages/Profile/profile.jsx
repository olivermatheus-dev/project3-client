import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../config/api/api.jsx";
import { ButtonLogout } from "./btnlogout.jsx";
import { ButtonEditProfile } from "./btnEditProfile.jsx";
import { AuthContext } from "../../config/context/authContext.jsx";
import { dateConverter } from "../../config/functions/dateConverter.js";
import { Modal } from "../../components/Modal/modal.jsx";
import { UpdateProfile } from "./updateProfile.jsx";

export function Profile() {
  const [loading, setLoading] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [user, setUser] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await api.get("/user/profile");

        setLoading(true);
        setUser(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchUser();
  }, [loggedInUser, updated]);
  console.log(updated);

  function handleLogOut() {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    navigate("/");
  }

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!loading && <div> Carregando</div>}
      {loading && (
        <div className="py-4 w-screen">
          <div className="container w-full h-screen block sm:flex gap-4">
            <div className="flex flex-col gap-4 items-center  py-6 container rounded-md shadow-2xl  sm:w-1/3 bg-white dark:bg-zinc-800">
              <div className=" py-6 container rounded-md shadow-xl bg-white dark:bg-emerald-700">
                <div className=" w-full flex justify-end pb-1">
                  <span
                    onClick={() => {
                      setIsOpen(true);
                    }}
                  >
                    <ButtonEditProfile />
                  </span>
                  {isOpen && (
                    <Modal setIsOpen={setIsOpen}>
                      <UpdateProfile
                        updated={updated}
                        setUpdated={setUpdated}
                      />
                    </Modal>
                  )}
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={user.img}
                    className="w-20 rounded-full outline  outline-offset-4 outline-emerald-400"
                  />
                  <div className="flex gap-3">
                    <div className="pt-2 font-bold flex flex-col items-center ">
                      <span className="dark:text-zinc-100">
                        {user.follower.length}
                      </span>
                      <span className="text-xs dark:text-zinc-100 font-normal">
                        Followers
                      </span>
                    </div>
                    <div className="pt-2 font-bold flex flex-col items-center ">
                      <span className="dark:text-zinc-100">
                        {user.following.length}
                      </span>
                      <span className="text-xs dark:text-zinc-100 font-normal">
                        Following
                      </span>
                    </div>
                  </div>
                  <h1 className="text-lg font-bold dark:text-zinc-100">
                    {user.name}
                  </h1>

                  <h1 className=" dark:text-zinc-100">@{user.username}</h1>

                  <p className="dark:text-zinc-100 text-xs pt-2">
                    User desde: {dateConverter(user.createdAt)}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center  py-6 container rounded-md shadow-xl bg-white dark:bg-emerald-700">
                <button onClick={handleLogOut}>
                  <ButtonLogout />
                </button>
              </div>
            </div>
            <div className="container py-8 mt-4 sm:mt-0 rounded-md shadow-2xl  sm:w-2/3  bg-white dark:bg-zinc-800">
              <div className="container rounded-md shadow-2xl ">
                <h1 className="text-2xl font-bold dark:text-zinc-100">
                  Seus tabs mais recentes
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
