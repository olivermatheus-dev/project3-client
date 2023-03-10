import { useState } from "react";
import { api } from "../../config/api/api";
import { motion } from "framer-motion";

export function ButtonFollow({ user, perfil, follower, setUpdated }) {
  const [isFollowing, setIsFollowing] = useState(
    !!follower.find((i) => i === user)
  );

  async function handleFollow() {
    try {
      const data = await api.put(`/follow/add/${perfil}`);
      setIsFollowing(!!data.data.follower.find((item) => item === user));
      setUpdated(Math.random());
    } catch (error) {
      console.log(error);
    }
  }

  async function handleUnfollow() {
    try {
      const data = await api.put(`/follow/remove/${perfil}`);
      setIsFollowing(!!data.data.follower.find((item) => item === user));
      setUpdated(Math.random());
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {!isFollowing ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            className="bg-emerald-500 text-sm py-1 px-3 rounded-md shadow-md my-2"
            onClick={handleFollow}
          >
            Follow
          </button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            className="bg-red-500 text-sm py-1 px-3 rounded-md shadow-md my-2"
            onClick={handleUnfollow}
          >
            Unfollow
          </button>
        </motion.div>
      )}
    </>
  );
}
