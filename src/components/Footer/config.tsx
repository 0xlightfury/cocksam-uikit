import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.cocksam.com/contact-us",
      },
      {
        label: "Blog",
        href: "https://medium.com/#",
      },
      {
        label: "Community",
        href: "https://docs.cocksam.com",
      },
      {
        label: "CockSam Token",
        href: "https://docs.cocksam.com",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://shop.cocksam.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "https://docs.cocksam.com",
      },
      {
        label: "Troubleshooting",
        href: "hhttps://docs.cocksam.com",
      },
      {
        label: "Guides",
        href: "https://docs.cocksam.com/",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/",
      },
      {
        label: "Documentation",
        href: "https://docs.cocksam.com/",
      },
      {
        label: "Bug Bounty",
        href: "https://docs.cocksam.com/",
      },
      {
        label: "Audits",
        href: "https://docs.cocksam.com/",
      },
      {
        label: "Careers",
        href: "https://docs.cocksam.com/",
      },
    ],
  },
];

export const socials = [
  // {
  //   label: "Twitter",
  //   icon: "Twitter",
  //   href: "https://twitter.com/#",
  // },
  {
    label: "Telegram",
    icon: "Telegram",
    href: "https://t.me/cocksam_ann",
  },
  // {
  //   label: "Reddit",
  //   icon: "Reddit",
  //   href: "https://www.reddit.com/#",
  // },
  // {
  //   label: "Instagram",
  //   icon: "Instagram",
  //   href: "https://www.instagram.com/#",
  // },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/cocksam",
  },
  // {
  //   label: "Discord",
  //   icon: "Discord",
  //   href: "https://discord.gg/#",
  // },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
