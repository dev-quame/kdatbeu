import { motion } from "motion/react";
import { ArrowUpRight, Camera, Clapperboard, Play, ScanLine, Video } from "lucide-react";
import { SmartLink } from "../SmartLink";
import { socialLinks, visualMoments } from "../../content/jayRicch";

const mosaicCards = [
  {
    title: "Cover energy",
    eyebrow: "Poster world",
    note: "Big type, tight crops, warm highlights, hard texture.",
    className: "md:col-span-2 md:row-span-2 min-h-[320px] sm:min-h-[420px]",
    tone: "from-[#e3df4f]/22 via-[#10100f] to-[#060606]",
  },
  {
    title: "Street portraits",
    eyebrow: "Close framing",
    note: "The face stays close. The feeling lands faster.",
    className: "min-h-[220px]",
    tone: "from-white/12 via-[#151512] to-[#060606]",
  },
  {
    title: "Stage motion",
    eyebrow: "Low-light action",
    note: "Hands up, fast cuts, mic pressure, crowd response.",
    className: "min-h-[220px]",
    tone: "from-[#2f3324] via-[#11110f] to-[#060606]",
  },
] as const;

export function Visuals() {
  return (
    <div className="section-shell pb-20 pt-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="surface noise-field mb-10 p-7 sm:p-10"
      >
        <p className="eyebrow mb-4">Visuals</p>
        <h1 className="display max-w-4xl text-5xl text-white sm:text-7xl">The image has to hit too.</h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
          Cover art, photo drops, behind-the-scenes motion, and the short videos that keep fans close.
        </p>
      </motion.div>

      <div className="mb-14 grid gap-5 md:grid-cols-2 md:auto-rows-[220px]">
        {mosaicCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className={card.className}
          >
            <div className={`poster-frame h-full border border-white/12 bg-[#10100f] bg-gradient-to-br ${card.tone} p-7 sm:p-8`}>
              <p className="eyebrow mb-5">{card.eyebrow}</p>
              <h2 className="display text-4xl text-white sm:text-5xl">{card.title}</h2>
              <p className="mt-4 max-w-sm text-sm leading-7 text-white/55">{card.note}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mb-14">
        <div className="mb-8">
          <p className="eyebrow mb-3">Visual lanes</p>
          <h2 className="display text-4xl text-white sm:text-5xl">Give every drop its own pressure.</h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {visualMoments.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="surface p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center border border-white/12 bg-white/[0.05] text-white/80">
                <Camera className="h-5 w-5" />
              </div>
              <p className="eyebrow mt-6 mb-4">{item.eyebrow}</p>
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/55">{item.note}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="surface p-7 sm:p-8"
        >
          <div className="flex h-12 w-12 items-center justify-center border border-white/12 bg-white/[0.05] text-white/80">
            <Clapperboard className="h-5 w-5" />
          </div>
          <p className="eyebrow mt-6 mb-4">Long-form visuals</p>
          <h2 className="display text-4xl text-white sm:text-5xl">YouTube is the main stage.</h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/55">
            Official drops, larger visuals, and bigger moments live best here.
          </p>
          <SmartLink
            href={socialLinks[0].href}
            className="mt-8 inline-flex items-center gap-2 border border-white/12 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white/80 transition hover:border-primary hover:text-primary"
          >
            Open YouTube
            <ArrowUpRight className="h-4 w-4" />
          </SmartLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="surface p-7 sm:p-8"
        >
          <div className="flex h-12 w-12 items-center justify-center border border-white/12 bg-white/[0.05] text-white/80">
            <Video className="h-5 w-5" />
          </div>
          <p className="eyebrow mt-6 mb-4">Short-form motion</p>
          <h2 className="display text-4xl text-white sm:text-5xl">TikTok keeps it close.</h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/55">
            Freestyles, fast edits, and more immediate camera-to-fan energy live here.
          </p>
          <SmartLink
            href={socialLinks[1].href}
            className="mt-8 inline-flex items-center gap-2 border border-white/12 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white/80 transition hover:border-primary hover:text-primary"
          >
            Open TikTok
            <ArrowUpRight className="h-4 w-4" />
          </SmartLink>
        </motion.div>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {[
          {
            title: "Camera close",
            icon: ScanLine,
            note: "Faces, details, and movement over distant polished shots.",
          },
          {
            title: "Motion first",
            icon: Play,
            note: "Short edits should feel immediate, not over-produced.",
          },
          {
            title: "Night textures",
            icon: Camera,
            note: "Warm highlights, shadow depth, and concrete atmosphere.",
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
