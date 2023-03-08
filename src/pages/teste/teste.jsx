import { motion } from "framer-motion";

export function LoadingTeste() {
  return (
    <div className="flex justify-center items-center h-screen">
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="h-4 w-4 rounded-full bg-blue-600 mx-1"
          animate={{
            y: [-10, 0, -10],
            transition: {
              yoyo: Infinity,
              duration: 0.5,
              delay: index * 0.1,
            },
          }}
          initial={{ y: -10 }}
        />
      ))}
    </div>
  );
}
