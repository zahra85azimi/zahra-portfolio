import menuItems from "../../data/menu";
import { useLanguage } from "../../context/LanguageContext";

function Navigation() {
  const { language } = useLanguage();

  return (
    <nav className="mt-0 flex-1 overflow-y-auto">
      <ul className="mx-3 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.link}>
              <a
                href={item.link}
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  px-5
                  py-3
                  text-slate-600
                  transition-all
                  duration-300
                  hover:-translate-x-1
                  hover:bg-slate-100
                  hover:text-sky-600
                  dark:text-slate-300
                  dark:hover:bg-slate-800
                  dark:hover:text-sky-400
                "
              >
                <Icon
                  className="
                    transition-all
                    duration-300
                    group-hover:scale-110
                  "
                />
                {item.title[language]}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
