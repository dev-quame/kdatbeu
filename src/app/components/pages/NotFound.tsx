import { motion } from "motion/react";
import { Link } from "react-router";
import { Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="section-shell flex min-h-[70vh] items-center justify-center py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="border border-white/12 bg-[#10100f] max-w-xl p-8 text-center sm:p-10"
      >
        <motion.h1
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="display text-7xl text-white sm:text-8xl"
        >
          404
        </motion.h1>
        <h2 className="mt-4 text-3xl font-semibold text-white">Wrong turn.</h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-white/55 sm:text-base">
          That page is not in the set list. Head back to the main world and keep moving.
        </p>
        <Link to="/">
          <motion.span
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 inline-flex items-center gap-3 border border-primary bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-black"
          >
            <Home className="h-5 w-5" />
            Back to home
          </motion.span>
        </Link>
      </motion.div>
    </div>
  );
}
