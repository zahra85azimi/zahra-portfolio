import digikalaLanding from "../assets/images/projects/digikala-landing.jpg";
import digikalaResponsive from "../assets/images/projects/digikala-responsive.jpg";
import golestanTea from "../assets/images/projects/golestan-tea.jpg";
import digikalaReact from "../assets/images/projects/digikala-react.jpg";
import personalWebsite from "../assets/images/projects/personal-website.jpg";

const projects = [
  {
    id: 1,

    title: {
      en: "Responsive Digikala",
      fa: "دیجی‌کالای واکنش‌گرا",
    },

    description: {
      en: "Fully responsive Digikala clone optimized for desktop, tablet and mobile.",
      fa: "نسخه کاملاً واکنش‌گرای دیجی‌کالا برای دسکتاپ، تبلت و موبایل.",
    },

    technologies: {
      en: ["HTML", "CSS", "Responsive"],
      fa: ["HTML", "CSS", "ریسپانسیو"],
    },

    github: "https://github.com/zahra85azimi/digikala_responsive_web2",

    demo: "https://zahra85azimi.github.io/digikala_responsive_web2/",

    image: digikalaResponsive,
  },
  {
    id: 2,

    title: {
      en: "Golestan Tea Website",
      fa: "وبسایت چای گلستان",
    },

    description: {
      en: "A corporate website inspired by Golestan Tea with elegant sections and animations.",
      fa: "وبسایت شرکتی با الهام از چای گلستان همراه با طراحی مدرن و انیمیشن.",
    },

    technologies: {
      en: ["HTML", "CSS"],
      fa: ["HTML", "CSS"],
    },

    github: "https://github.com/zahra85azimi/chai-golestan",

    demo: "https://zahra85azimi.github.io/chai-golestan/",

    image: golestanTea,
  },
  {
    id: 3,

    title: {
      en: "Personal Website",
      fa: "وبسایت شخصی",
    },

    description: {
      en: "A modern personal website focused on responsive design and clean user experience.",
      fa: "یک وبسایت شخصی مدرن با تمرکز بر طراحی واکنش‌گرا و تجربه کاربری مناسب.",
    },

    technologies: {
      en: ["HTML", "CSS", "JavaScript", "bootstrap"],
      fa: ["HTML", "CSS", "جاوااسکریپت" , "bootstrap"],
    },

    github: "https://github.com/zahra85azimi/personal-web2",

    demo: "https://zahra85azimi.github.io/personal-web2/",

    image: personalWebsite,
  },

  {
    id: 4,

    title: {
      en: "Digikala React",
      fa: "دیجی‌کالا با ری‌اکت",
    },

    description: {
      en: "A React version of Digikala with reusable components and modern architecture.",
      fa: "نسخه ری‌اکتی دیجی‌کالا با کامپوننت‌های قابل استفاده مجدد و معماری مدرن.",
    },

    technologies: {
      en: ["React", "CSS"],
      fa: ["ری‌اکت", "CSS"],
    },

    github: "https://github.com/zahra85azimi/digikala-react",

    demo: "https://zahra85azimi.github.io/digikala-react/",

    image: digikalaReact,
  },
  {
    id: 5,

    title: {
      en: "Digikala Landing Page",
      fa: "لندینگ پیج دیجی‌کالا",
    },

    description: {
      en: "A modern landing page inspired by Digikala with clean UI and responsive layout.",
      fa: "یک لندینگ پیج مدرن با الهام از دیجی‌کالا با رابط کاربری تمیز و طراحی واکنش‌گرا.",
    },

    technologies: {
      en: ["HTML", "CSS", "JavaScript"],
      fa: ["HTML", "CSS", "جاوااسکریپت"],
    },

    github: "https://github.com/zahra85azimi/digikala_web1",

    demo: "https://zahra85azimi.github.io/digikala_web1/",

    image: digikalaLanding,
  },
];

export default projects;
