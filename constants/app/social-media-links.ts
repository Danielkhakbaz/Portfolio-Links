import { StaticImageData } from "next/image";
import TelegramLogo from "public/logos/telegram-logo.svg";
import TelegramIcon from "public/logos/telegram-icon.svg";
import TwitterLogo from "public/logos/twitter-logo.svg";
import TwitterIcon from "public/logos/twitter-icon.svg";
import InstagramLogo from "public/logos/instagram-logo.svg";
import InstagramIcon from "public/logos/instagram-icon.svg";
import GithubLogo from "public/logos/github-logo.svg";
import LinkedinLogo from "public/logos/linkedin-logo.svg";
import SkypeLogo from "public/logos/skype-logo.svg";
import SpotifyLogo from "public/logos/spotify-logo.svg";
import SpotifyIcon from "public/logos/spotify-icon.svg";
import DiscordLogo from "public/logos/discord-logo.svg";

type socialMediaLinksType = {
  title: string;
  link: string;
  logo: StaticImageData;
  icon?: StaticImageData;
};

export const socialMediaLinks: socialMediaLinksType[] = [
  {
    title: "Telegram",
    link: "https://t.me/danielkhakbaz",
    logo: TelegramLogo,
    icon: TelegramIcon,
  },
  {
    title: "Twitter",
    link: "https://twitter.com/danielkhakbaz",
    logo: TwitterLogo,
    icon: TwitterIcon,
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/danielkhakbaz/",
    logo: InstagramLogo,
    icon: InstagramIcon,
  },
  {
    title: "Github",
    link: "https://github.com/danielkhakbaz",
    logo: GithubLogo,
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/danielkhakbaz/",
    logo: LinkedinLogo,
  },
  {
    title: "Skype",
    link: "https://join.skype.com/invite/cC3x8Gzfx1ao",
    logo: SkypeLogo,
  },
  {
    title: "Spotify",
    link: "https://open.spotify.com/user/3p0q2i0j7g4e0vo9hc0kkpmov?si=22691cd459ad4736&nd=1",
    logo: SpotifyLogo,
    icon: SpotifyIcon,
  },
  {
    title: "Discord",
    link: "https://www.discordapp.com/users/723483973409570816",
    logo: DiscordLogo,
  },
];
