import { useState, useEffect, useContext } from "react";
import { api } from "../../config/api/api.jsx";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthContext } from "../../config/context/authContext.jsx";
import { useUserInfo } from "../../config/context/userInfoHook.jsx";
import { ModalConfirmDelete } from "./modalConfirmDelete.jsx";
import { ButtonFollow } from "./btnFollow.jsx";

export function ModalFollow({
  array,
  setVisibility,
  user,
  perfil,
  setUpdated,
}) {
  return (
    <>
      <div className="z-50 fixed bg-zinc-900/70  flex justify-center items-center  top-0 right-0 bottom-0 left-0 h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="w-[400px] sm:w-[500px] md:w-[600px] lg:w-[400px] h-[300px]  bg-zinc-100 dark:bg-zinc-800 rounded-md shadow-2xl ">
            <span className="flex justify-end pt-2 pr-2">
              <div
                onClick={() => {
                  setVisibility(false);
                }}
                className="w-7 h-7 cursor-pointer dark:hover:bg-white/40 hover:bg-black/40 rounded-sm flex items-center justify-center transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 dark:text-white/80 text-black/80 hover:text-black dark:hover:text-white transition"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </span>
            <div className="rounded-md h-[250px] dark:bg-zinc-800/80 flex flex-col  gap-5">
              <h1 className="text-2xl font-bold dark:text-zinc-100  ml-7">
                Seguidores
              </h1>
              <div
                style={{ maxHeight: "500px", overflow: "auto" }}
                className="flex flex-col h-full gap-2 px-5 scrollbar-thin dark:scrollbar-thumb-emerald-600 scrollbar-thumb-emerald-500 scrollbar-track-gray-200 dark:scrollbar-track-zinc-500 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
              >
                {array.map((e) => {
                  return (
                    <Link to={`/profile/${e.username}/user`}>
                      <div className="w-full h-12 bg-zinc-50 dark:bg-zinc-700 rounded-md flex gap-2 shadow-xl">
                        <Link
                          to={`/profile/${e.username}/user`}
                          className="flex items-center "
                        >
                          <img
                            className=" object-cover  w-5 h-5  sm:w-8 sm:h-8  mx-1  sm:mx-4 rounded-full sm:block"
                            src={e.img}
                            alt="avatar"
                          />
                          <div
                            className="font-bold text-gray-700 cursor-pointer dark:text-gray-200"
                            role="link"
                          >
                            @{e.username}
                          </div>
                        </Link>

                        {/* {e._id !== user && (
                        <ButtonFollow
                          user={user}
                          perfil={e._id}
                          follower={e.follower}
                          setUpdated={setUpdated}
                        />
                      )} */}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
