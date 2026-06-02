import { motion } from "motion/react";
import { ArrowRight, NotebookPen, RadioTower, Sparkles } from "lucide-react";
import { SmartLink } from "../SmartLink";
import { journalPosts } from "../../content/jayRicch";

export function Journal() {
  const [featured, ...rest] = journalPosts;

  return (
    <div className="section-shell pb-20 pt-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="surface noise-field mb-10 p-7 sm:p-10"
      >
        <p className="eyebrow mb-4">Journal</p>
        <h1 className="display max-w-4xl text-5xl text-white sm:text-7xl">Less essays. More moments.</h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
          Short notes from the road, the studio, and the shows. Just enough context to bring people closer.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.12 }}
        className="surface mb-14 overflow-hidden"
      >
        <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="min-h-[280px] bg-[#10100f] p-8 sm:p-10">
            <p className="eyebrow mb-6">{featured.eyebrow}</p>
            <h2 className="display text-4xl text-white sm:text-6xl">{featured.title}</h2>
          </div>
          <div className="p-8 sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center border border-white/12 bg-white/[0.05] text-white/80">
              <NotebookPen className="h-5 w-5" />
            </div>
            <p className="mt-6 max-w-lg text-sm leading-8 text-white/58 sm:text-base">
              {featured.note}
            </p>
            <SmartLink
              href="/shows"
              className="mt-8 inline-flex items-center gap-2 border border-white/12 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white/80 transition hover:border-primary hover:text-primary"
            >
              See the live page
              <ArrowRight className="h-4 w-4" />
            </SmartLink>
          </div>
        </div>
      </motion.div>

      <div className="mb-14 grid gap-5 lg:grid-cols-3">
        {rest.map((post, index) => (
          <motion.div
            key={post.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="surface p-6"
          >
            <p className="eyebrow mb-4">{post.eyebrow}</p>
            <h3 className="text-2xl font-semibold text-white">{post.title}</h3>
            <p className="mt-3 text-sm leading-7 text-white/55">{post.note}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {[
          {
            title: "Studio notes",
            icon: RadioTower,
            note: "Drop fast updates without turning the page into a wall of text.",
          },
          {
            title: "Show recaps",
            icon: Sparkles,
            note: "Post a sharp recap after every strong crowd moment or performance night.",
          },
          {
            title: "Release context",
            icon: NotebookPen,
            note: "Give fans just enough backstory to feel closer to the music.",
          },
        ].map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="surface p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center border border-white/12 bg-white/[0.05] text-white/80">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/55">{item.note}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
