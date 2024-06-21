import {
  FaDiagramProject,
  FaEnvelope,
  FaGithub,
  FaHouse,
  FaLinkedinIn,
  FaInstagram,
  FaRenren,
  FaUser,
  FaYoutube,
} from "react-icons/fa6";
import {
  
  CineCompass,
  IdaCreation,
  MusicPlayer,
  SocialMedia,
  StaticPage,
} from "../assets";

export const Socials = [
  {
    id: `facebook-${Date.now()}`,
    Icon: FaInstagram,
    uri: "https://www.instagram.com/peradheepyuvaraj/",
    color: "#1877F2",
  },
  {
    id: `linkedin-${Date.now()}`,
    Icon: FaLinkedinIn,
    uri: "https://www.linkedin.com/in/peradheep-y/",
    color: "#0072b1",
  },
  {
    id: `github-${Date.now()}`,
    Icon: FaGithub,
    uri: "https://github.com/PeradheepY",
    color: "#fff",
  },
  {
    id: `youtube-${Date.now()}`,
    Icon: FaYoutube,
    uri: "https://www.youtube.com/channel/UCgddFZdRq9ORarMwMMjha1Q",
    color: "#ff0000",
  },
];

export const Menus = [
  {
    id: `home-${Date.now()}`,
    Icon: FaHouse,
    uri: "#home",
    name: "Home",
  },
  {
    id: `about-${Date.now()}`,
    Icon: FaUser,
    uri: "#about",
    name: "About",
  },
  {
    id: `skills-${Date.now()}`,
    Icon: FaRenren,
    uri: "#skills",
    name: "Skills",
  },
  {
    id: `projects-${Date.now()}`,
    Icon: FaDiagramProject,
    uri: "#projects",
    name: "Projects",
  },
  {
    id: `contact-${Date.now()}`,
    Icon: FaEnvelope,
    uri: "#contact",
    name: "Contact",
  },
];

export const ProjectsData = [
  {
    id: `food-${Date.now()}`,
    name: "CineCompass",
    imgSrc: CineCompass,
    gitURL: "https://github.com/PeradheepY/cine-compass",
  },
  {
    id: `codepen-${Date.now()}`,
    name: "StaticPage",
    imgSrc: StaticPage,
    gitURL: "https://github.com/PeradheepY/Project_milestone_1",
  },
  {
    id: `openai-${Date.now()}`,
    name: "MusicPlayer",
    imgSrc: MusicPlayer,
    gitURL: "https://github.com/PeradheepY/music-player-project",
  },
  {
    id: `chatapp-${Date.now()}`,
    name: "IdaCreation",
    imgSrc: IdaCreation,
    gitURL: "https://github.com/PeradheepY/IDA-Creations-React--prjt",
  },
  // {
  //   id: `imageSharing-${Date.now()}`,
  //   name: "Image Sharing App",
  //   imgSrc: ImageSharing,
  //   gitURL: "https://github.com/Vetrivel-VP",
  // },
  // {
  //   id: `pixabayclone-${Date.now()}`,
  //   name: "Pixabay Clone 2.0",
  //   imgSrc: PixabayClone,
  //   gitURL: "https://github.com/Vetrivel-VP",
  // }
];
