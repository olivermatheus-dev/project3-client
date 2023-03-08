import { motion } from "framer-motion";

export function Loading() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen w-screen transition-all duration-500 bg-zinc-700"
    >
      Loading
    </motion.div>
  );
}
