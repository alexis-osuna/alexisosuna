import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiGo,
  SiRust,
  SiVercel,
  SiNuxtdotjs,
  SiSvelte,
  SiVisualstudio,
  SiReact,
  SiPrisma,
  SiPlaystation,
} from "react-icons/si";

const content = {
  bio: {
    name: "Alexis Osuna",
    label: "Web Developer",
    description: "Trying to keep up with all this tech!",
    image: "/avatar.jpg",
  },
  nav: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Tech", href: "/tech" },
    { name: "Blog", href: "/blog" },
    { name: "Music", href: "/music" },
  ],
  about: {
    title: "About me",
    description:
      "Hi, my name is Alexis. I started programming a couple of year ago and now I'm sad and depressed.",
    sections: [
      { title: "Education", description: "lmao" },
      { title: "Gear", description: "Cheapest M1 Macbook Pro" },
    ],
    image: "/avatar.jpg",
  },
  tech: {
    title: "Tech",
    description: "What I use, I've used and want to use.",
    sections: [
      {
        title: "My current favourites",
        list: [
          {
            name: "Next.js",
            comment: "still learning it atm.",
            icon: <SiNextdotjs />,
          },
          {
            name: "Tailwind",
            comment:
              "at first i thought it was weird but now i can't see myself not using it.",
            icon: <SiTailwindcss color="#06B6D4" />,
          },
          {
            name: "Typescript",
            comment: "<3.",
            icon: <SiTypescript color="#3178C6" />,
          },
          {
            name: "VSCode",
            icon: <SiVisualstudio color="#007ACC" />,
          },
        ],
      },
      {
        title: "What I want to learn",
        description:
          "Stuff I want to try but I'm either too lazy or haven't had a reason to.",
        list: [
          { name: "Rust", icon: <SiRust /> },
          { name: "Go", icon: <SiGo color="#00ADD8" /> },
          {
            name: "React Native",
            comment: "too lazy!!",
            icon: <SiReact color="#61DAFB" />,
          },
          { name: "Nuxt", icon: <SiNuxtdotjs color="#00DC82" /> },
          { name: "Svelte", icon: <SiSvelte color="#FF3E00" /> },
        ],
      },
      {
        title: "On this website",
        list: [
          { name: "Typescript", icon: <SiTypescript color="#3178C6" /> },
          { name: "Next.js", icon: <SiNextdotjs /> },
          { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" /> },
          { name: "Vercel", comment: "the best.", icon: <SiVercel /> },
          { name: "Prisma", icon: <SiPrisma /> },
          {
            name: "PlanetScale",
            comment: "no icon lol.",
            icon: <SiPlaystation />,
          },
        ],
      },
    ],
  },
  blog: {
    title: "Blog",
    description: "Random thoughts...",
  },
  music: {
    title: "Music",
    description: "What I'm currently listening to (probably Yeat).",
  },
  notFound: {
    title: "Oops...",
    description: "Watch where u r going!",
  },
  notPlaying: "not listening to music rn... :(",
  email: "hi@alexisosuna.dev",
  socials: [{ name: "Github", href: "https://github.com/alexis-osuna" }],
  footer: "Website inspired by Lee Robinson",
  copyright: "© 2022 Alexis Osuna.",
};

export default content;
