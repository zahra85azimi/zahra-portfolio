import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";

import { SiJavascript, SiTailwindcss } from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: FaReact,
    category: {
      en: "Front-End Framework",
      fa: "فریم‌ورک فرانت‌اند",
    },
    level: {
      en: "Advanced",
      fa: "پیشرفته",
    },
    color: "text-cyan-500",
  },

  {
    name: "JavaScript",
    icon: SiJavascript,
    category: {
      en: "Programming Language",
      fa: "زبان برنامه‌نویسی",
    },
    level: {
      en: "Advanced",
      fa: "پیشرفته",
    },
    color: "text-yellow-400",
  },

  {
    name: "HTML5",
    icon: FaHtml5,
    category: {
      en: "Markup Language",
      fa: "زبان نشانه‌گذاری",
    },
    level: {
      en: "Advanced",
      fa: "پیشرفته",
    },
    color: "text-orange-500",
  },

  {
    name: "CSS3",
    icon: FaCss3Alt,
    category: {
      en: "Styling Language",
      fa: "زبان استایل‌دهی",
    },
    level: {
      en: "Advanced",
      fa: "پیشرفته",
    },
    color: "text-blue-500",
  },

  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    category: {
      en: "CSS Framework",
      fa: "فریم‌ورک CSS",
    },
    level: {
      en: "Advanced",
      fa: "پیشرفته",
    },
    color: "text-sky-500",
  },

  {
    name: "Bootstrap",
    icon: FaBootstrap,
    category: {
      en: "CSS Framework",
      fa: "فریم‌ورک CSS",
    },
    level: {
      en: "Intermediate",
      fa: "متوسط",
    },
    color: "text-violet-600",
  },

  {
    name: "Git",
    icon: FaGitAlt,
    category: {
      en: "Version Control",
      fa: "کنترل نسخه",
    },
    level: {
      en: "Intermediate",
      fa: "متوسط",
    },
    color: "text-red-500",
  },
];

export default skills;
