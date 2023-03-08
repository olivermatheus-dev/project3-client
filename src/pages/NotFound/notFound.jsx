import { motion } from "framer-motion";
export function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Página não encontrada</h1>
    </motion.div>
  );
}
