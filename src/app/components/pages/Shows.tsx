import { motion } from "motion/react";
import { ArrowUpRight, CalendarRange, Map, Mic2, Ticket } from "lucide-react";
import { SmartLink } from "../SmartLink";
import { liveMoments, socialLinks } from "../../content/jayRicch";

const showUtilities = [
  "Date announcements",
  "Ticket links",
  "City info",
  "Show recap posts",
] as const;

export function Shows() {
  return (
    <div className="section-shell pb-20 pt-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <p className="eyebrow mb-4">Shows</p>
        <h1 className="display text-5xl text-white sm:text-7xl">Built for live rooms.</h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
          Close rooms, campus pull-ups, and festival pace when the dates open up.
        </p>
      </motion.div>

      <div className="mb-14 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="border border-white/12 bg-[#10100f] p-7 sm:p-9"
        >
          <div className="flex h-12 w-12 items-center justify-center border border-white/12 bg-white/[0.05] text-white/80">
            <CalendarRange className="h-5 w-5" />
          </div>
          <p className="eyebrow mt-6 mb-4">Status</p>
          <h2 className="display text-4xl text-white sm:text-5xl">No public dates locked in yet.</h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/55">
            The next date, venue, or ticket link can land here the second it is public.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {showUtilities.map((item) => (
              <span
                key={item}
                className="border border-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-white/58"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {liveMoments.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 + index * 0.08 }}
              className="border border-white/12 bg-[#10100f] p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center border border-white/12 bg-white/[0.05] text-white/80">
                <Mic2 className="h-5 w-5" />
              </div>
              <p className="eyebrow mt-6 mb-4">{item.eyebrow}</p>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/55">{item.note}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-14 grid gap-5 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border border-white/12 bg-[#10100f] p-7 sm:p-8"
        >
          <div className="flex h-12 w-12 items-center justify-center border border-white/12 bg-white/[0.05] text-white/80">
            <Ticket className="h-5 w-5" />
          </div>
          <p className="eyebrow mt-6 mb-4">What lands here</p>
          <h2 className="display text-4xl text-white sm:text-5xl">A proper live calendar.</h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/55">
            Dates, ticket links, city notes, and show recaps stay easy to scan instead of getting lost in socials.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="border border-white/12 bg-[#10100f] p-7 sm:p-8"
        >
          <div className="flex h-12 w-12 items-center justify-center border border-white/12 bg-white/[0.05] text-white/80">
            <Map className="h-5 w-5" />
          </div>
          <p className="eyebrow mt-6 mb-4">Until then</p>
          <h2 className="display text-4xl text-white sm:text-5xl">Keep fans tapped in elsewhere.</h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/55">
            Use the fast-moving channels for updates, then let this page become the official source once dates go public.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <SmartLink
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-2 border border-white/12 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white/80 transition hover:border-primary hover:text-primary"
              >
                {link.label}
                <ArrowUpRight className="h-4 w-4" />
              </SmartLink>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
