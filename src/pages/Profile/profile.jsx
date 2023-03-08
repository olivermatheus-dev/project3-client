import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { api } from "../../config/api/api.jsx";
import { ButtonEditProfile } from "./btnEditProfile.jsx";
import { AuthContext } from "../../config/context/authContext.jsx";
import { dateConverter } from "../../config/functions/dateConverter.js";
import { Modal } from "../../components/Modal/modal.jsx";
import { UpdateProfile } from "./updateProfile.jsx";
import { TabBoxProfile } from "../../components/TabBox/tabboxprofile.jsx";
import { ButtonFollow } from "./btnFollow.jsx";
import { ButtonLogout } from "./btnlogout.jsx";
import { motion } from "framer-motion";

export function Profile() {
  const [loading, setLoading] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [tabs, setTabs] = useState([]);
  const [user, setUser] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  const params = useParams();

  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);

  useEffect(() => {
    async function fetchUserPerfil() {
      try {
        const response = await api.get(`/user/profile/${params.username}`);

        setTabs(response.data.tabsId);
        setLoading(true);
        setUser(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchUserPerfil();
  }, [loggedInUser, updated]);

  let userId;
  if (localStorage.getItem("loggedInUser")) {
    userId = JSON.parse(localStorage.getItem("loggedInUser") || '""').user._id;
  }

  function handleLogOut() {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    navigate("/");
  }

  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {!loading && <div className="h-[1080px] w-screen bg-zinc-500"></div>}
      {loading && (
        <div className="py-4 w-screen">
          <div className="container w-full h-screen block sm:flex gap-4">
            <div className="flex flex-col gap-4 items-center  py-6 container rounded-md shadow-2xl  sm:w-1/3 bg-white dark:bg-zinc-800 transition duration-300 ease-in-out">
              <div className=" py-6 container rounded-md shadow-xl bg-white dark:bg-emerald-700">
                <div className=" w-full flex justify-end pb-1">
                  <span
                    onClick={() => {
                      setIsOpen(true);
                    }}
                  >
                    {user._id === userId && <ButtonEditProfile />}
                  </span>
                  {isOpen && (
                    <Modal setIsOpen={setIsOpen}>
                      <UpdateProfile
                        updated={updated}
                        setUpdated={setUpdated}
                        setIsOpen={setIsOpen}
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

                  {user._id !== userId && (
                    <ButtonFollow
                      user={userId}
                      perfil={user._id}
                      follower={user.follower}
                      setUpdated={setUpdated}
                    />
                  )}

                  <h1 className="text-lg font-bold dark:text-zinc-100">
                    {user.name}
                  </h1>

                  <h1 className=" dark:text-zinc-100">@{user.username}</h1>

                  <p className="dark:text-zinc-100 text-xs pt-2">
                    User desde: {dateConverter(user.createdAt)}
                  </p>
                </div>
              </div>
              {user._id === userId && (
                <div className="flex flex-col gap-2 items-center  py-6 container rounded-md shadow-xl bg-white dark:bg-emerald-700">
                  <button onClick={handleLogOut}>
                    <ButtonLogout />
                  </button>
                </div>
              )}
            </div>
            <div className="container py-8 mt-4 sm:mt-0 rounded-md shadow-2xl  sm:w-2/3  bg-white  dark:bg-zinc-800/20">
              <div className="container rounded-md shadow-2xl dark:bg-zinc-600">
                <h1 className="text-2xl font-bold dark:text-zinc-100 pt-4">
                  Tabs recentes
                </h1>
                <div
                  className="flex flex-col gap-4 py-5
                "
                >
                  {tabs.map((e) => {
                    return (
                      <div key={e._id}>
                        <TabBoxProfile tab={e} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
