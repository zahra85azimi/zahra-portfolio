import {
  FaHome,
  FaUser,
  FaCode,
  FaFolderOpen,
  FaEnvelope,
  FaGraduationCap,
  FaAward,
} from "react-icons/fa";

const menuItems = [
  {
    title: {
      en: "Home",
      fa: "خانه",
    },
    icon: FaHome,
    link: "#home",
  },

  {
    title: {
      en: "About",
      fa: "درباره من",
    },
    icon: FaUser,
    link: "#about",
  },

  {
    title: {
      en: "Skills",
      fa: "مهارت‌ها",
    },
    icon: FaCode,
    link: "#skills",
  },

  {
    title: {
      en: "Portfolio",
      fa: "پروژه‌ها",
    },
    icon: FaFolderOpen,
    link: "#portfolio",
  },

  {
    title: {
      en: "Education",
      fa: "تحصیلات",
    },
    icon: FaGraduationCap,
    link: "#education",
  },

  {
    title: {
      en: "Certificates",
      fa: "مدارک",
    },
    icon: FaAward,
    link: "#certificates",
  },

  {
    title: {
      en: "Contact",
      fa: "تماس با من",
    },
    icon: FaEnvelope,
    link: "#contact",
  },
];

export default menuItems;
