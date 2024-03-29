import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../config/api/api.jsx";
import { ButtonEditProfile } from "./btnEditProfile.jsx";
import { AuthContext } from "../../config/context/authContext.jsx";
import { dateConverter } from "../../config/functions/dateConverter.js";
import { Modal } from "../../components/Modal/modal.jsx";
import { UpdateProfile } from "./updateProfile.jsx";
import { TabBoxProfile } from "../../components/TabBox/tabboxprofile.jsx";
import { ButtonFollow } from "./btnFollow.jsx";

import { motion } from "framer-motion";
import { Loading } from "../../components/Loading/index.jsx";
import { useUserInfo } from "../../config/context/userInfoHook.jsx";
import { ModalConfirmDelete } from "./modalConfirmDelete.jsx";
import { ModalFollow } from "./modalFollow.jsx";

export function Profile() {
  const { userInfo } = useUserInfo();
  const [loading, setLoading] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [tabs, setTabs] = useState([]);
  const [user, setUser] = useState({ name: "", email: "" });
  const [deleteModal, setDeleteModal] = useState(false);
  const [followerVisibility, setFollowerVisibility] = useState(false);
  const [followingVisibility, setFollowingVisibility] = useState(false);

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
      } catch (err) {
        console.log(err);
      }
    }

    fetchUserPerfil();
  }, [loggedInUser, updated, params.username]);

  let userId;
  if (localStorage.getItem("loggedInUser")) {
    userId = JSON.parse(localStorage.getItem("loggedInUser") || '""').user._id;
  }

  const [isOpen, setIsOpen] = useState(false);

  //regex tirar http
  let semHttps = "";
  const url = user.externalURL;
  if (user.externalURL) {
    semHttps = url.replace(/^https?:\/\//i, "");
  }

  async function handleDelete() {
    try {
      await api.delete(`user/delete/${params.username}`);
      if (userInfo.username === params.username) {
        localStorage.removeItem("loggedInUser");
        setLoggedInUser(null);
      }
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {followingVisibility && (
        <ModalFollow
          array={user.following}
          setVisibility={setFollowingVisibility}
          user={userId}
          perfil={user._id}
          follower={user.follower}
          setUpdated={setUpdated}
        />
      )}
      {followerVisibility && (
        <ModalFollow
          array={user.follower}
          setVisibility={setFollowerVisibility}
          user={userId}
          perfil={user._id}
          follower={user.follower}
          setUpdated={setUpdated}
        />
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        {!loading && <Loading />}
        {deleteModal && (
          <ModalConfirmDelete
            handleDelete={handleDelete}
            setDeleteModal={setDeleteModal}
          />
        )}

        {loading && (
          <div className="py-4 w-full h-full">
            <div className="container w-full block lg:flex gap-4">
              <div className="  flex flex-col gap-4 items-center  py-6 container rounded-md shadow-2xl   bg-zinc-50 dark:bg-zinc-800/80 transition duration-300 ease-in-out">
                <div className="w-full py-6 container rounded-md shadow-xl bg-zinc-50 dark:bg-zinc-800 ">
                  <div className=" w-full flex justify-end pb-1">
                    <span
                      onClick={() => {
                        setIsOpen(true);
                      }}
                    >
                      {userInfo &&
                        (user._id === userId || userInfo.role === "ADMIN") && (
                          <ButtonEditProfile />
                        )}
                    </span>
                    {isOpen && (
                      <Modal setIsOpen={setIsOpen}>
                        <UpdateProfile
                          setDeleteModal={setDeleteModal}
                          updated={updated}
                          setUpdated={setUpdated}
                          setIsOpen={setIsOpen}
                        />
                      </Modal>
                    )}
                  </div>
                  <div className="flex flex-col items-center -mt-8">
                    {user.role === "ADMIN" && (
                      <div className="flex flex-col items-center">
                        <p>👑</p>
                        <h1 className="text-emerald-600 text-base dark:text-zinc-100 font-medium italic pb-3">
                          ADMIN
                        </h1>
                      </div>
                    )}

                    <img
                      src={user.img}
                      className=" object-cover  w-32 h-32 rounded-full outline  outline-offset-4 outline-emerald-400"
                    />
                    <div className="flex gap-3">
                      <button
                        onClick={() => {
                          setFollowerVisibility(true);
                        }}
                        className="pt-2 font-bold flex flex-col items-center "
                      >
                        <span className="dark:text-zinc-100">
                          {user.follower.length}
                        </span>
                        <span className="text-xs dark:text-zinc-100 font-normal">
                          Followers
                        </span>
                      </button>

                      <button
                        onClick={() => {
                          setFollowingVisibility(true);
                        }}
                        className="pt-2 font-bold flex flex-col items-center "
                      >
                        <span className="dark:text-zinc-100">
                          {user.following.length}
                        </span>
                        <span className="text-xs dark:text-zinc-100 font-normal">
                          Following
                        </span>
                      </button>
                    </div>

                    {user._id !== userId && (
                      <ButtonFollow
                        user={userId}
                        perfil={user._id}
                        follower={user.follower.map((i) => i._id)}
                        setUpdated={setUpdated}
                      />
                    )}
                    {user && (user.seniority || user.specialization) && (
                      <>
                        <div className="flex gap-1">
                          <h1 className="text-emerald-600 text-base dark:text-zinc-100 font-medium italic py-1">
                            {user.seniority}
                          </h1>
                          {user.seniority && user.specialization ? (
                            <h1 className="text-emerald-600 text-base dark:text-zinc-100 font-medium italic py-1">
                              -
                            </h1>
                          ) : null}

                          <h1 className="text-emerald-600 text-base dark:text-zinc-100 font-medium italic py-1">
                            {user.specialization}
                          </h1>
                        </div>
                        <div className="w-5/6 rounded-xl h-[2px] bg-emerald-600 dark:bg-zinc-100/40 my-1" />
                      </>
                    )}

                    <h1 className="text-lg font-bold dark:text-zinc-100">
                      {user.name}
                    </h1>

                    <h1 className=" dark:text-zinc-100 font-medium">
                      @{user.username}
                    </h1>
                    {user.aboutMe && (
                      <>
                        <div className="w-5/6 rounded-xl h-[2px] bg-emerald-600 dark:bg-zinc-100/40 my-1" />
                        <p className="w-5/6 text-center my-1 dark:text-zinc-100">
                          {user.aboutMe}
                        </p>
                      </>
                    )}
                    {user.externalURL && (
                      <>
                        <div className="w-5/6 rounded-xl h-[2px] bg-emerald-600 dark:bg-zinc-100/40 my-1" />
                        <a
                          className="text-sm  text-center font-semibold dark:text-zinc-100"
                          href={user.externalURL}
                        >
                          {semHttps}
                        </a>
                      </>
                    )}

                    <p className="dark:text-zinc-100 text-xs pt-2">
                      User desde: {dateConverter(user.createdAt)}
                    </p>
                  </div>
                </div>
              </div>
              <div className=" w-auto lg:w-[800px] xl:w-2/3 ">
                <div className="container  2xl:w-[780px]  rounded-md shadow-2xl dark:bg-zinc-800/80 bg-zinc-50">
                  <h1 className="text-2xl font-bold dark:text-zinc-100 pt-4 ml-7">
                    Tabs recentes
                  </h1>
                  <div
                    style={{ maxHeight: "800px", overflow: "auto" }}
                    className="flex flex-col gap-2 py-5 px-5 scrollbar-thin dark:scrollbar-thumb-emerald-600 scrollbar-thumb-emerald-500 scrollbar-track-gray-200 dark:scrollbar-track-zinc-500 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
                  >
                    {tabs.map((tab) => (
                      <TabBoxProfile key={tab._id} tab={tab} user={user} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
}
