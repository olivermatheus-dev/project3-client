import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

export function Redirect() {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/profile/${params.userId}/user`);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="w-screen bg-zinc-800">Redirecionando...</div>
    </motion.div>
  );
}
