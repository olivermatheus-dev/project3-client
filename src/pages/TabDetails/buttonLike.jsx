import { useParams } from "react-router-dom";
import { api } from "../../config/api/api";
import { motion } from "framer-motion";
import LikedOffIcon from "../../assets/images/likes/likedOff.svg";
import LikedOnIcon from "../../assets/images/likes/likedOn.svg";

export function ButtonLike({ user, setUpdatePage, userLikes }) {
  const filterLikes = userLikes.find(
    (currentElement) => currentElement === user
  );

  const isLiked = !!filterLikes;

  const params = useParams();

  async function handleLike() {
    try {
      await api.put(`/like/add/${params.tabId}`);
      setUpdatePage((state) => !state);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDislike() {
    try {
      await api.put(`/like/remove/${params.tabId}`);
      setUpdatePage((state) => !state);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {!isLiked && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button className=" px-3  my-2 " onClick={handleLike}>
            <img src={LikedOffIcon} className="" />
          </button>
        </motion.div>
      )}
      {isLiked && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button className=" px-3  my-2 " onClick={handleDislike}>
            <img src={LikedOnIcon} className="" />
          </button>
        </motion.div>
      )}
    </div>
  );
}
