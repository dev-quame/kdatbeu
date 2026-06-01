export const artistProfile = {
  name: "JAY RICCH",
  handle: "@jayricch",
  origin: "Ghana",
  label: "50 NIGGEZ RECORDS",
  roles: ["Rapper", "Singer", "Songwriter"],
  heroLine: "Pressure music from Ghana to the world.",
  shortBio:
    "Jay Ricch is a Ghanaian rapper, singer, and songwriter with a raw, story-led sound built from hunger, motion, and lived detail.",
  bio:
    "The 2024 single Grind Day pushed the next chapter forward and set the tone for a catalog rooted in grit, melody, and sharp storytelling.",
  featuredRelease: "Grind Day",
  featuredYear: "2024",
};

export const socialLinks = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@JAYRICCH50",
    note: "Official drops and visuals",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@jayricchtherapper",
    note: "Freestyles and fast clips",
  },
] as const;

export const soundMoments = [
  {
    title: "Grind Day",
    eyebrow: "Breakout single",
    note: "The 2024 record that opened the current run.",
    action: "Watch the release",
    href: socialLinks[0].href,
    tone: "from-[#e3df4f]/24 via-[#10100f] to-[#060606]",
  },
  {
    title: "Freestyle cuts",
    eyebrow: "Short-form pressure",
    note: "Quick drops, direct bars, no extra polish.",
    action: "Tap into TikTok",
    href: socialLinks[1].href,
    tone: "from-white/12 via-[#151512] to-[#060606]",
  },
  {
    title: "Next rollout",
    eyebrow: "Built to grow",
    note: "Snippets, visuals, and the next full release push.",
    action: "Open the journal",
    href: "/journal",
    tone: "from-[#2f3324] via-[#11110f] to-[#060606]",
  },
] as const;

export const soundTraits = [
  "Story-first bars",
  "Melodic switch-ups",
  "Street detail",
  "Late-night energy",
];

export const visualMoments = [
  {
    title: "Street frames",
    eyebrow: "Photo direction",
    note: "Portraits, motion blur, and hard shadows that feel close to the music.",
    size: "md:col-span-2",
    tone: "from-[#e3df4f]/20 via-[#10100f] to-[#060606]",
  },
  {
    title: "Show stills",
    eyebrow: "Crowd energy",
    note: "Stage sweat, crowd hands, low-light atmosphere.",
    size: "",
    tone: "from-white/10 via-[#141412] to-[#060606]",
  },
  {
    title: "Studio motion",
    eyebrow: "Behind the scenes",
    note: "Sessions, planning boards, and the pressure before the drop.",
    size: "",
    tone: "from-[#2b2b24] via-[#10100f] to-[#060606]",
  },
] as const;

export const liveMoments = [
  {
    title: "Club pressure",
    eyebrow: "Small rooms",
    note: "Fast set, close crowd, zero wasted movement.",
  },
  {
    title: "Campus pull-ups",
    eyebrow: "Youth energy",
    note: "Hooks that land quick and a set built to move.",
  },
  {
    title: "Festival mode",
    eyebrow: "Open-air scale",
    note: "Big entrances, clear pacing, and crowd-ready moments.",
  },
] as const;

export const journalPosts = [
  {
    title: "The door opened with Grind Day",
    eyebrow: "Release note",
    note: "One record made the mission visible. The next step is making the run undeniable.",
  },
  {
    title: "Why the camera stays close",
    eyebrow: "Visual note",
    note: "Less distance. More face, more movement, more truth.",
  },
  {
    title: "Small room, loud response",
    eyebrow: "Show note",
    note: "The goal is simple: make every set feel bigger than the room.",
  },
  {
    title: "What drops next",
    eyebrow: "Studio note",
    note: "New music, new visuals, and a sharper rollout around them.",
  },
] as const;

export const homePillars = ["Music", "Visuals", "Shows", "Journal"] as const;
