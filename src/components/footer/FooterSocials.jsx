import { FiGithub, FiLinkedin, FiSend, FiMail } from "react-icons/fi";

const socials = [
  {
    icon: FiGithub,
    link: "https://github.com/zahra85azimi",
  },
  {
    icon: FiLinkedin,
    link: "https://www.linkedin.com/in/zahra-azimi-672938420/",
  },
  {
    icon: FiSend,
    link: "https://t.me/zahraDeveloper",
  },
  {
    icon: FiMail,
    link: "mailto:zahraazm222@gmail.com",
  },
];
function FooterSocials() {
  return (
    <div className="mt-8 flex justify-center gap-5">
      {socials.map((item, index) => {
        const Icon = item.icon;
        return (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-slate-800
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-sky-500
              hover:scale-110
              hover:rotate-6
              hover:shadow-xl
              hover:shadow-sky-500/40
            "
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
}

export default FooterSocials;
