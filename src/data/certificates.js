import frontendImage from "../assets/certificates/frontend-certificate.jpeg";
import reactImage from "../assets/certificates/react-certificate.jpeg";

const certificates = {
  en: [
    {
      title: "Front-End Web Development",
      issuer: "ACECR Tehran Branch",
      year: "2025",
      skills:
        "HTML • CSS • JavaScript • Bootstrap • Tailwind CSS • Git • Responsive Design",
      image: frontendImage,
    },

    {
      title: "React.js Development",
      issuer: "ACECR Tehran Branch",
      year: "2026",
      skills: "React • Components • Hooks • Routing • State Management",
      image: reactImage,
    },
  ],

  fa: [
    {
      title: "توسعه وب فرانت‌اند",
      issuer: "جهاد دانشگاهی تهران",
      year: "۱۴۰۴",
      skills:
        "HTML • CSS • JavaScript • Bootstrap • Tailwind CSS • Git • طراحی واکنش‌گرا",
      image: frontendImage,
    },

    {
      title: "توسعه با ری‌اکت",
      issuer: "جهاد دانشگاهی تهران",
      year: "۱۴۰۵",
      skills: "React • Components • Hooks • Routing • State Management",
      image: reactImage,
    },
  ],
};

export default certificates;
