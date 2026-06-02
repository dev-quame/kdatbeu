import { NavLink, Outlet } from "react-router";
import { ArrowUpRight, AudioLines, Clapperboard, Home, NotebookPen, PlayCircle, Ticket } from "lucide-react";
import { motion } from "motion/react";
import { artistProfile, socialLinks } from "../content/jayRicch";
import { cn } from "./ui/utils";

export function Layout() {
  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/music", label: "Sound", icon: AudioLines },
    { path: "/visuals", label: "Visuals", icon: Clapperboard },
    { path: "/shows", label: "Shows", icon: Ticket },
    { path: "/journal", label: "Journal", icon: NotebookPen, desktopOnly: true },
  ];

  return (
    <div className="min-h-screen text-white">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-x-0 top-0 z-50 border-b border-white/12 bg-[#060606]/88 backdrop-blur-xl"
      >
        <div className="section-shell py-3 sm:py-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center justify-between gap-4">
              <NavLink
                to="/"
                aria-label={`${artistProfile.name} home`}
                className="group inline-flex flex-col leading-none"
              >
                <span className="display text-2xl font-semibold text-white sm:text-3xl">
                  {artistProfile.name}
                </span>
                <span className="mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.26em] text-white/40 transition group-hover:text-primary sm:text-[0.62rem] sm:tracking-[0.32em]">
                  {artistProfile.handle}
                </span>
              </NavLink>

              <a
                href={socialLinks[0].href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-10 items-center gap-2 border border-primary bg-primary px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-black transition hover:bg-white sm:px-4 sm:tracking-[0.18em] lg:hidden"
              >
                <PlayCircle className="h-4 w-4" />
                Watch
              </a>
            </div>

            <div className="flex items-center gap-3 lg:gap-4">
              <div className="grid flex-1 grid-cols-4 gap-1 border border-white/10 bg-white/[0.035] p-1 lg:flex-none lg:auto-cols-max lg:grid-flow-col lg:grid-cols-none">
                {navItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        cn(
                          "inline-flex min-h-10 items-center justify-center gap-1.5 px-2 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.1em] whitespace-nowrap transition-colors sm:gap-2 sm:px-4 sm:text-xs sm:tracking-[0.16em]",
                          item.desktopOnly && "hidden lg:inline-flex",
                          isActive
                            ? "bg-primary text-black"
                            : "text-white/55 hover:bg-white/[0.06] hover:text-white",
                        )
                      }
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </NavLink>
                  );
                })}
              </div>

              <a
                href={socialLinks[0].href}
                target="_blank"
                rel="noreferrer"
                className="hidden min-h-11 items-center gap-2 border border-primary bg-primary px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-white lg:inline-flex"
              >
                <PlayCircle className="h-4 w-4" />
                Watch now
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      <main className="pt-[7.5rem] sm:pt-32 lg:pt-24">
        <Outlet />
      </main>

      <footer className="mt-24 border-t border-white/10 bg-[#060606]/70">
        <div className="section-shell py-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow mb-3">{artistProfile.name}</p>
              <p className="text-base text-white/70">
                Music, visuals, live energy, and short notes from the run.
              </p>
              <p className="mt-3 text-sm text-white/45">
                {artistProfile.origin} / {artistProfile.label}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-white/12 px-4 py-2 text-sm text-white/70 transition hover:border-primary hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
