import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiRust,
  SiVercel,
  SiGo,
  SiSvelte,
  SiPrisma,
  SiRailway,
  SiStripe,
  SiStrapi,
} from "react-icons/si";

const content = {
  bio: {
    name: "Alexis Osuna",
    label: "Web Developer",
    image: "/avatar.jpg",
  },
  nav: [
    { name: "Home", href: "/", header: true },
    { name: "About", href: "/about", header: true },
    { name: "Blog", href: "/blog", header: true },
    { name: "Signatures", href: "/signatures", header: false },
    { name: "Shop", href: "/shop", header: true },
    { name: "Music", href: "/music", header: true },
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
            comment: "<3.",
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
            icon: <SiTypescript color="#3178C6" />,
          },
        ],
      },
      {
        title: "What I want to learn",
        description:
          "Stuff I want to try but I'm either too lazy or haven't had a reason to.",
        list: [
          { name: "Svelte", icon: <SiSvelte color="#FF3E00" /> },
          { name: "Go", icon: <SiGo color="#00ADD8" /> },
          { name: "Rust", comment: "too lazy!!", icon: <SiRust /> },
        ],
      },
      {
        title: "On this website",
        list: [
          { name: "Typescript", icon: <SiTypescript color="#3178C6" /> },
          { name: "Next.js", icon: <SiNextdotjs /> },
          { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" /> },
          { name: "Prisma", icon: <SiPrisma /> },
          { name: "Vercel", icon: <SiVercel /> },
          {
            name: "Stripe",
            comment: "handles payments in the shop.",
            icon: <SiStripe color="#008CDD" />,
          },
          {
            name: "Strapi",
            comment:
              "provides product data and images stored in S3. over-engineered website i know... but i really wanted to try this things!",
            icon: <SiStrapi color="#2F2E8B" />,
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
  links: [
    {
      name: "Practice",
      href: "https://practice.alexisosuna.dev",
    },
  ],
  footer: "Website inspired by Lee Robinson",
  copyright: "Alexis Osuna.",
};

export default content;
