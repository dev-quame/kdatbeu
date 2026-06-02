import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  Clapperboard,
  Mic2,
  Newspaper,
  Play,
  RadioTower,
  Sparkles,
  Ticket,
} from "lucide-react";
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
    { label: "Sound", icon: AudioLines, href: "/music", accent: "text-primary" },
    { label: "Visuals", icon: Clapperboard, href: "/visuals", accent: "text-electric" },
    { label: "Shows", icon: Ticket, href: "/shows", accent: "text-heat" },
    { label: "Journal", icon: Newspaper, href: "/journal", accent: "text-violet" },
  ];

  const heroStats = [
    { label: "Origin", value: artistProfile.origin },
    { label: "Release", value: artistProfile.featuredRelease },
    { label: "Year", value: artistProfile.featuredYear },
  ];

  return (
    <div className="pb-20">
      <section className="noise-field relative overflow-hidden pb-12 pt-3 sm:pb-20 sm:pt-10">
        <div className="section-shell">
          <div className="grid gap-9 xl:grid-cols-[0.98fr_1.02fr] xl:items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-5 flex flex-wrap items-center gap-2 sm:mb-6 sm:gap-3">
                <p className="eyebrow">{artistProfile.origin} / {artistProfile.label}</p>
                <span className="border border-white/12 bg-white/[0.04] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/62 sm:text-xs sm:tracking-[0.2em]">
                  {artistProfile.roles.join(" / ")}
                </span>
              </div>
              <h1 className="display max-w-[8.5ch] text-[clamp(3.55rem,21vw,10.5rem)] font-semibold leading-[0.86] text-white">
                {artistProfile.name}
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-white/86 sm:mt-7 sm:text-3xl sm:leading-10">
                {artistProfile.heroLine}
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 sm:mt-5 sm:text-base">
                {artistProfile.shortBio} {artistProfile.bio}
              </p>

              <div className="mt-7 grid gap-3 sm:mt-9 sm:flex sm:flex-wrap">
                <SmartLink
                  href={socialLinks[0].href}
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 border border-primary bg-primary px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-black transition hover:bg-white sm:w-auto sm:px-6 sm:text-sm sm:tracking-[0.16em]"
                >
                  <Play className="h-4 w-4" />
                  Watch on YouTube
                  <ArrowUpRight className="h-4 w-4" />
                </SmartLink>
                <SmartLink
                  href="#sound"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 border border-white/16 bg-white/[0.035] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/82 transition hover:border-primary hover:text-white sm:w-auto sm:px-6 sm:text-sm sm:tracking-[0.16em]"
                >
                  Enter the sound
                  <ArrowRight className="h-4 w-4" />
                </SmartLink>
              </div>

              <div className="mt-8 grid max-w-2xl grid-cols-3 gap-px overflow-hidden border border-white/10 bg-white/10 sm:mt-10">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="bg-[#060606]/82 p-3 sm:p-4">
                    <p className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-white/36 sm:text-[0.66rem] sm:tracking-[0.22em]">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-xs font-semibold text-white sm:text-base">{stat.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="relative"
            >
              <div className="poster-frame min-h-[24rem] border border-white/14 bg-[#10100f] p-5 sm:min-h-[38rem] sm:p-8">
                <div className="scanlines absolute inset-0 opacity-25" />
                <div className="relative flex h-full min-h-[21rem] flex-col justify-between sm:min-h-[34rem]">
                  <div className="flex items-start justify-between gap-4 sm:gap-5">
                    <div>
                      <p className="eyebrow mb-3 text-black/70">Current release</p>
                      <h2 className="display max-w-[8ch] text-5xl font-semibold leading-[0.86] text-black sm:text-8xl">
                        {artistProfile.featuredRelease}
                      </h2>
                    </div>
                    <span className="border border-black/20 bg-black px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-primary sm:text-xs sm:tracking-[0.22em]">
                      {artistProfile.featuredYear}
                    </span>
                  </div>

                  <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                    <div className="flex h-24 items-end gap-1.5 border border-black/15 bg-black/14 p-3 sm:h-32 sm:gap-2 sm:p-4">
                      {Array.from({ length: 18 }).map((_, index) => (
                        <span
                          key={index}
                          className="equalizer-bar block flex-1 bg-black/70"
                          style={{
                            height: `${28 + ((index * 17) % 74)}%`,
                            animationDelay: `${index * 0.08}s`,
                          }}
                        />
                      ))}
                    </div>
                    <div className="border border-black/15 bg-black/72 p-4 text-white sm:p-5">
                      <div className="mb-4 flex items-center gap-3 sm:mb-5">
                        <span className="flex h-10 w-10 items-center justify-center border border-primary/35 bg-primary text-black">
                          <Mic2 className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                            New wave
                          </p>
                          <p className="mt-1 text-sm text-white/58">Grit / Melody / Motion</p>
                        </div>
                      </div>
                      <p className="text-sm leading-6 text-white/68 sm:leading-7">
                        A visual-first entry point for the track, the clips, and the next rollout.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:mt-5 sm:grid-cols-2 sm:gap-4">
                <SmartLink
                  href={socialLinks[0].href}
                  className="group surface p-4 transition hover:border-primary sm:p-5"
                >
                  <p className="eyebrow mb-3">Visual drop</p>
                  <p className="text-base font-semibold text-white sm:text-lg">Official channel</p>
                  <p className="mt-2 text-sm leading-6 text-white/52">Videos, release moments, and the main visual lane.</p>
                </SmartLink>
                <SmartLink
                  href={socialLinks[1].href}
                  className="group surface p-4 transition hover:border-electric sm:p-5"
                >
                  <p className="eyebrow mb-3">Fast lane</p>
                  <p className="text-base font-semibold text-white sm:text-lg">Freestyle clips</p>
                  <p className="mt-2 text-sm leading-6 text-white/52">Short hits, direct camera energy, and new snippets.</p>
                </SmartLink>
              </div>
            </motion.div>
          </div>
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
          {sectionLinks.filter((item) => item.label !== "Journal").map((item, index) => {
            const Icon = item.icon;

            return (
              <SmartLink
                key={item.label}
                href={item.href}
                className="group bg-[#060606] p-4 transition hover:bg-[#10100f] sm:p-5"
              >
                <div className="flex items-center justify-between gap-4">
                  <Icon className={`h-5 w-5 ${item.accent}`} />
                  <span className="text-xs uppercase tracking-[0.28em] text-white/35">
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-4 text-base font-semibold text-white sm:mt-5 sm:text-lg">{item.label}</p>
                <p className="mt-2 text-sm leading-6 text-white/52">
                  {homePillars[index]} with a sharper path into the run.
                </p>
              </SmartLink>
            );
          })}
        </motion.div>
      </section>

      <section id="sound" className="section-shell py-12 sm:py-18">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
          <div>
            <p className="eyebrow mb-3">Sound</p>
            <h2 className="display text-3xl font-semibold text-white sm:text-6xl">Start with the records.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
              A clear first route into the music, freestyles, and next release.
            </p>
          </div>
          <div className="hidden border border-white/10 bg-white/[0.035] p-5 lg:block">
            <RadioTower className="h-5 w-5 text-electric" />
            <p className="mt-4 text-sm leading-6 text-white/58">
              Built as a quick scan: hit play, catch the clips, then follow the rollout.
            </p>
          </div>
        </div>

        <div className="mb-5 grid gap-3 sm:grid-cols-3">
          {artistProfile.roles.map((role, index) => (
            <div key={role} className="border border-white/10 bg-[#10100f] px-4 py-3 sm:px-5 sm:py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/36">
                0{index + 1}
              </p>
              <p className="mt-2 text-base font-semibold text-white sm:text-lg">{role}</p>
            </div>
          ))}
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
                className={`group poster-frame block h-full min-h-[17rem] border border-white/12 bg-gradient-to-br ${item.tone} p-5 transition hover:border-primary sm:min-h-[20rem] sm:p-7`}
              >
                <div className="relative flex h-full min-h-[13rem] flex-col justify-between sm:min-h-[16rem]">
                  <div>
                    <p className="eyebrow mb-5">{item.eyebrow}</p>
                    <h3 className="display text-2xl font-semibold text-white sm:text-4xl">{item.title}</h3>
                    <p className="mt-4 max-w-sm text-sm leading-7 text-white/64">{item.note}</p>
                  </div>
                  <div className="mt-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-white/82 transition group-hover:text-primary">
                    {item.action}
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </SmartLink>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-shell border-t border-white/10 py-12 sm:py-18">
        <div className="surface grid gap-0 overflow-hidden lg:grid-cols-[0.72fr_0.28fr]">
          <div className="noise-field p-5 sm:p-10">
            <p className="eyebrow mb-4">Momentum</p>
            <h2 className="display max-w-4xl text-3xl font-semibold text-white sm:text-6xl">
              A sharper world for every drop, clip, and show announcement.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/58 sm:text-base">
              The design now gives the music a visual system: cover energy, quick social routes, and sections that feel connected.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-white/10 lg:grid-cols-1">
            {[
              { label: "Visual identity", icon: Sparkles, color: "text-primary" },
              { label: "Live-ready pages", icon: Ticket, color: "text-heat" },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="bg-[#060606] p-5 sm:p-6">
                  <Icon className={`h-6 w-6 ${item.color}`} />
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-white/72">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell border-t border-white/10 py-12 sm:py-18">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow mb-3">Visuals</p>
            <h2 className="display text-3xl font-semibold text-white sm:text-6xl">Make the world feel close.</h2>
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

      <section className="section-shell border-t border-white/10 py-12 sm:py-18">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="border border-white/12 bg-[#10100f] p-5 sm:p-8">
            <p className="eyebrow mb-4">Live</p>
            <h2 className="display text-3xl font-semibold text-white sm:text-5xl">Built for live rooms.</h2>
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
                className="border border-white/12 bg-[#10100f] p-5 sm:p-6"
              >
                <p className="eyebrow mb-4">{item.eyebrow}</p>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/55">{item.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell hidden border-t border-white/10 py-14 sm:block sm:py-18">
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
