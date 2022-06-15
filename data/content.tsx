import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiRust,
  SiVisualstudio,
  SiVercel,
  SiNuxtdotjs,
  SiSvelte,
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
    { name: "Blog", href: "/blog" },
    { name: "Shop", href: "/shop" },
    { name: "Music", href: "/music" },
  ],
  about: {
    title: "About me",
    description:
      "Hi, my name is Alexis. I started programming a couple of year ago and now I'm sad and depressed.",
    sections: [
      { title: "Education", description: "lmao" },
      { title: "Gear", description: "Cheapest M1 MacBook Pro" },
      {
        title: "Favourite tech rn",
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
          { name: "Svelte", icon: <SiSvelte color="#FF3E00" /> },
          { name: "Nuxt", icon: <SiNuxtdotjs color="#00DC82" /> },
          { name: "Rust", comment: "too lazy!!", icon: <SiRust /> },
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
    image: "/avatar.jpg",
  },
  blog: {
    title: "Blog",
    description: "Random thoughts...",
  },
  signatures: {
    title: "Signatures",
    description: "Messages people have left on my site.",
  },
  shop: {
    title: "Shop",
    description: "Give me your money!",
  },
  music: {
    title: "Music",
    description: "What I'm currently listening to (probably Yeat).",
  },
  notFound: {
    title: "Oops...",
    description: "Watch where u r going!",
  },
  success: {
    title: "YOU JUST GOT SCAMMED!",
    description: "Thanks for the money kiddo.",
    image: "/emoji.png",
  },
  email: "hi@alexisosuna.dev",
  socials: [{ name: "Github", href: "https://github.com/alexis-osuna" }],
  footer: "Website inspired by Lee Robinson",
  copyright: "© 2022 Alexis Osuna.",
};

export default content;
