import { useState } from "react";
import { api } from "../../config/api/api";

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
        <button
          className="bg-cyan-600 py-2 px-3 rounded-md shadow-md"
          onClick={handleFollow}
        >
          Follow
        </button>
      )}
      {isFollowing && (
        <button
          className="bg-cyan-600 py-2 px-3 rounded-md shadow-md"
          onClick={handleUnfollow}
        >
          Unfollow
        </button>
      )}
    </>
  );
}
