const content = {
  bio: {
    name: "Alexis Osuna",
    label: "Web Developer",
    description: "Trying to keep up with all this tech!",
    image: "/avatar.jpg",
  },
  nav: [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Tech",
      href: "/tech",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Music",
      href: "/music",
    },
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
    description: "Tech I use, I've used and want to use.",
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
    link: { name: "go back", href: "/" },
  },
  notPlaying: "not listening to music rn... :(",
  footer: "Website obviously inspired by Lee Robinson.",
  socials: [{ name: "Github", href: "/alexis-osuna" }],
  copyright: "Copyright © 2022 Alexis Osuna. All rights reserved.",
};

export default content;
