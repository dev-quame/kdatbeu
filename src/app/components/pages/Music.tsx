import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, AudioLines, Disc3, Mic2, Play, Radio } from "lucide-react";
import { SmartLink } from "../SmartLink";
import { artistProfile, socialLinks, soundMoments, soundTraits } from "../../content/jayRicch";

export function Music() {
  const releaseFrames = [
    {
      title: "Grind Day",
      eyebrow: "Breakout release",
      note: "The record that pushed Jay Ricch into the next chapter in 2024.",
      icon: Disc3,
    },
    {
      title: "Freestyle lane",
      eyebrow: "Quick drops",
      note: "Short-form cuts for the people who want direct bars and fast energy.",
      icon: Mic2,
    },
    {
      title: "Next rollout",
      eyebrow: "Built in",
      note: "Teasers, snippets, and the next full push stay close to the records.",
      icon: Radio,
    },
  ];

  return (
    <div className="section-shell pb-20 pt-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="surface noise-field mb-10 p-7 sm:p-10"
      >
        <p className="eyebrow mb-4">Sound</p>
        <h1 className="display max-w-4xl text-5xl text-white sm:text-7xl">
          The music leads everything.
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
          {artistProfile.featuredRelease} is the starting point: pressure, melody, and a voice built for the next wave.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="surface poster-frame relative mb-14 overflow-hidden p-7 sm:p-10"
      >
        <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(227,223,79,0.14),rgba(16,16,15,0.2)_42%,rgba(0,0,0,0.22))]" />
        <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="border border-white/12 bg-[#060606] p-8">
            <p className="eyebrow mb-10">Featured release</p>
            <h2 className="display text-5xl text-white sm:text-7xl">{artistProfile.featuredRelease}</h2>
            <p className="mt-4 text-sm uppercase tracking-[0.28em] text-primary">
              {artistProfile.featuredYear}
            </p>
          </div>
          <div>
            <p className="eyebrow mb-4">What it signals</p>
            <h3 className="display text-4xl text-white sm:text-5xl">
              Hunger, detail, and a sharper public voice.
            </h3>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
              {artistProfile.featuredRelease} gives the story a clear entry point without making people read too much.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <SmartLink
                href={socialLinks[0].href}
                className="inline-flex items-center gap-2 border border-primary bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-white"
              >
                Watch now
                <Play className="h-4 w-4" />
              </SmartLink>
              <SmartLink
                href={socialLinks[1].href}
                className="inline-flex items-center gap-2 border border-white/12 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white/80 transition hover:border-primary hover:text-primary"
              >
                Catch the clips
                <ArrowUpRight className="h-4 w-4" />
              </SmartLink>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mb-14 grid gap-5 lg:grid-cols-3">
        {soundMoments.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <SmartLink
              href={item.href}
              className="surface group relative block overflow-hidden p-6 transition hover:border-primary"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.tone} opacity-90`} />
              <div className="relative">
                <p className="eyebrow mb-4">{item.eyebrow}</p>
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/55">{item.note}</p>
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition group-hover:gap-3">
                  {item.action}
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </SmartLink>
          </motion.div>
        ))}
      </div>

      <div className="mb-14">
        <div className="mb-8">
          <p className="eyebrow mb-3">Sound DNA</p>
          <h2 className="display text-4xl text-white sm:text-5xl">What the audience should feel fast.</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {soundTraits.map((trait, index) => (
            <motion.div
              key={trait}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="surface p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center border border-white/12 bg-white/[0.05] text-white/80">
                <AudioLines className="h-5 w-5" />
              </div>
              <p className="mt-5 text-xl font-semibold text-white">{trait}</p>
              <p className="mt-3 text-sm leading-7 text-white/55">
                Keep this trait visible in every release card, teaser, and visual caption.
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-8">
          <p className="eyebrow mb-3">Release system</p>
          <h2 className="display text-4xl text-white sm:text-5xl">Three lanes. One clear identity.</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {releaseFrames.map((frame, index) => {
            const Icon = frame.icon;

            return (
              <motion.div
                key={frame.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="surface p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center border border-white/12 bg-white/[0.05] text-white/80">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="eyebrow mt-6 mb-4">{frame.eyebrow}</p>
                <h3 className="text-2xl font-semibold text-white">{frame.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/55">{frame.note}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
