import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, AudioLines, Clapperboard, Newspaper, Play, Ticket } from "lucide-react";
import { SmartLink } from "../SmartLink";
import {
  artistProfile,
  homePillars,
  journalPosts,
  liveMoments,
  socialLinks,
  soundMoments,
  visualMoments,
} from "../../content/jayRicch";

export function Home() {
  const sectionLinks = [
    { label: "Sound", icon: AudioLines, href: "/music" },
    { label: "Visuals", icon: Clapperboard, href: "/visuals" },
    { label: "Shows", icon: Ticket, href: "/shows" },
    { label: "Journal", icon: Newspaper, href: "/journal" },
  ];

  return (
    <div className="pb-20">
      <section className="section-shell pb-16 pt-8 sm:pb-20 sm:pt-14">
        <div className="grid gap-12 xl:grid-cols-[1.08fr_0.92fr] xl:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow mb-6">{artistProfile.origin} / {artistProfile.label}</p>
            <h1 className="display max-w-[9ch] text-[clamp(4.25rem,13vw,10rem)] font-semibold leading-[0.9] text-white">
              {artistProfile.name}
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-white/80 sm:text-2xl sm:leading-9">
              {artistProfile.heroLine}
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/58 sm:text-base">
              {artistProfile.shortBio} {artistProfile.bio}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <SmartLink
                href={socialLinks[0].href}
                className="inline-flex items-center gap-2 border border-primary bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-white"
              >
                Watch on YouTube
                <ArrowUpRight className="h-4 w-4" />
              </SmartLink>
              <SmartLink
                href="#sound"
                className="inline-flex items-center gap-2 border border-white/16 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white/82 transition hover:border-primary hover:text-white"
              >
                Enter the sound
                <ArrowRight className="h-4 w-4" />
              </SmartLink>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="border-y border-white/14 py-8 xl:py-10"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow mb-3">Current release</p>
                <h2 className="display text-6xl font-semibold leading-none text-white sm:text-8xl">
                  {artistProfile.featuredRelease}
                </h2>
              </div>
              <span className="border border-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                {artistProfile.featuredYear}
              </span>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              <SmartLink
                href={socialLinks[0].href}
                className="group border border-white/12 bg-[#10100f] p-5 transition hover:border-primary"
              >
                <p className="eyebrow mb-3">Visual drop</p>
                <p className="text-lg font-semibold text-white">Official channel</p>
                <p className="mt-2 text-sm leading-6 text-white/52">Videos, release moments, and the main visual lane.</p>
              </SmartLink>
              <SmartLink
                href={socialLinks[1].href}
                className="group border border-white/12 bg-[#10100f] p-5 transition hover:border-primary"
              >
                <p className="eyebrow mb-3">Fast lane</p>
                <p className="text-lg font-semibold text-white">Freestyle clips</p>
                <p className="mt-2 text-sm leading-6 text-white/52">Short hits, direct camera energy, and new snippets.</p>
              </SmartLink>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-shell border-y border-white/10 py-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-px overflow-hidden bg-white/10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {sectionLinks.map((item, index) => {
            const Icon = item.icon;

            return (
              <SmartLink
                key={item.label}
                href={item.href}
                className="group bg-[#060606] p-5 transition hover:bg-[#10100f]"
              >
                <div className="flex items-center justify-between gap-4">
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="text-xs uppercase tracking-[0.28em] text-white/35">
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-5 text-lg font-semibold text-white">{item.label}</p>
                <p className="mt-2 text-sm leading-6 text-white/52">
                  {homePillars[index]} with a sharper path into the run.
                </p>
              </SmartLink>
            );
          })}
        </motion.div>
      </section>

      <section id="sound" className="section-shell py-14 sm:py-18">
        <div className="mb-10">
          <p className="eyebrow mb-3">Sound</p>
          <h2 className="display text-4xl font-semibold text-white sm:text-6xl">Start with the records.</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
            A clear first route into the music, freestyles, and next release.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
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
                className={`group block h-full border border-white/12 bg-gradient-to-br ${item.tone} p-7 transition hover:border-primary`}
              >
                <p className="eyebrow mb-5">{item.eyebrow}</p>
                <h3 className="display text-3xl font-semibold text-white sm:text-4xl">{item.title}</h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-white/58">{item.note}</p>
                <div className="mt-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-white/82 transition group-hover:text-primary">
                  {item.action}
                  <ArrowRight className="h-4 w-4" />
                </div>
              </SmartLink>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-shell border-t border-white/10 py-14 sm:py-18">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow mb-3">Visuals</p>
            <h2 className="display text-4xl font-semibold text-white sm:text-6xl">Make the world feel close.</h2>
          </div>
          <SmartLink
            href="/visuals"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-white/74 transition hover:text-primary"
          >
            Open visuals
            <ArrowUpRight className="h-4 w-4" />
          </SmartLink>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {visualMoments.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={item.size}
            >
              <div
                className={`h-full border border-white/12 bg-gradient-to-br ${item.tone} p-7 sm:p-8`}
              >
                <p className="eyebrow mb-5">{item.eyebrow}</p>
                <h3 className="display text-3xl font-semibold text-white sm:text-5xl">{item.title}</h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-white/58">{item.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-shell border-t border-white/10 py-14 sm:py-18">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="border border-white/12 bg-[#10100f] p-7 sm:p-8">
            <p className="eyebrow mb-4">Live</p>
            <h2 className="display text-4xl font-semibold text-white sm:text-5xl">Built for live rooms.</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/55">
              Public dates can land here the second they are locked.
            </p>
            <SmartLink
              href="/shows"
              className="mt-8 inline-flex items-center gap-2 border border-white/12 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white/80 transition hover:border-primary hover:text-primary"
            >
              Open shows
              <ArrowRight className="h-4 w-4" />
            </SmartLink>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {liveMoments.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="border border-white/12 bg-[#10100f] p-6"
              >
                <p className="eyebrow mb-4">{item.eyebrow}</p>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/55">{item.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell border-t border-white/10 py-14 sm:py-18">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow mb-3">Journal</p>
            <h2 className="display text-4xl font-semibold text-white sm:text-6xl">Short notes. No filler.</h2>
          </div>
          <SmartLink
            href="/journal"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-white/74 transition hover:text-primary"
          >
            Read the journal
            <ArrowUpRight className="h-4 w-4" />
          </SmartLink>
        </div>

        <div className="grid gap-5 lg:grid-cols-4">
          {journalPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="border border-white/12 bg-[#10100f] p-6"
            >
              <p className="eyebrow mb-4">{post.eyebrow}</p>
              <h3 className="text-xl font-semibold text-white">{post.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/55">{post.note}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-shell pt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-y border-white/12 py-10"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="eyebrow mb-3">Tap in</p>
              <h2 className="display text-4xl font-semibold text-white sm:text-5xl">
                Follow the run where it moves fastest.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <SmartLink
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center gap-2 border border-white/12 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white/80 transition hover:border-primary hover:text-primary"
                >
                  {link.label}
                  <Play className="h-4 w-4" />
                </SmartLink>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
