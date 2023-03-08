import { useState } from "react";
import { api } from "../../config/api/api";
import { motion } from "framer-motion";

export function ButtonFollow({ user, perfil, setUpdated, follower }) {
  const filterFollower = follower.find(
    (currentElement) => currentElement._id === user
  );

  const isFollowing = !!filterFollower;

  async function handleFollow() {
    try {
      await api.put(`/follow/add/${perfil}`);
      setUpdated((state) => !state);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleUnfollow() {
    try {
      await api.put(`/follow/remove/${perfil}`);
      setUpdated((state) => !state);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {!isFollowing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            className="bg-sky-600 py-2 px-3 rounded-md shadow-md my-2"
            onClick={handleFollow}
          >
            Follow
          </button>
        </motion.div>
      )}
      {isFollowing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            className="bg-red-500 py-2 px-3 rounded-md shadow-md my-2"
            onClick={handleUnfollow}
          >
            Unfollow
          </button>
        </motion.div>
      )}
    </>
  );
}
