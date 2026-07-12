import socialLinks from "../../data/social";

function SocialLinks() {
  return (
    <div className="mt-8 flex justify-center gap-4">
      {socialLinks.map((item, index) => {
        const Icon = item.icon;

        return (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              bg-slate-100
              dark:bg-slate-800
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
              hover:bg-sky-500
              dark:hover:bg-sky-500
              hover:text-white
              text-slate-700
              dark:text-slate-200
               "
          >
            <Icon size={18} />
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;
