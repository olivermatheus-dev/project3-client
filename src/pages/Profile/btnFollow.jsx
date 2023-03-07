import { useEffect } from "react";
import { api } from "../../config/api/api";

export function ButtonFollow({ user, perfil, setUpdated }) {
  async function handleClick() {
    try {
      await api.put(`/follow/add/${perfil}`);
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect(() => {
  //     async function fetchUser() {
  //       try {
  //         const response = await api.get(`/user/profile/${params.username}`);

  //       } catch (err) {
  //         console.log(err);
  //       }
  //     }

  //     fetchUser();
  //   }, []);

  return (
    <button
      className="bg-cyan-600 py-2 px-3 rounded-md shadow-md"
      onClick={handleClick}
    >
      Seguir
    </button>
  );
}
