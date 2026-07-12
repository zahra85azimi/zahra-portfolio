import ProfileCard from "./ProfileCard";
import SocialLinks from "./SocialLinks";
import Navigation from "./Navigation";
import SidebarFooter from "./SidebarFooter";

function Sidebar() {
  return (
    <aside
      className="
        hidden
        lg:flex
        fixed
        right-0
        top-0
        h-screen
        w-80
        flex-col
        border-l
        border-gray-200
        bg-gradient-to-b
        from-white
        to-slate-50
        shadow-[0_10px_60px_rgba(15,23,42,.08)]
        transition-all
        duration-500
        dark:border-slate-800
        dark:from-slate-950
        dark:via-slate-900
        dark:to-slate-950
        dark:shadow-[0_10px_60px_rgba(0,0,0,.55)]
        "
    >
      {/* Header */}
      <div className="border-b border-gray-200 p-8 dark:border-slate-800 ">
        <ProfileCard />
        <SocialLinks />
      </div>
      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        <Navigation />
      </div>
      {/* Footer */}
      <div className="border-t border-gray-200 p-5 dark:border-slate-800">
        <SidebarFooter />
      </div>
    </aside>
  );
}

export default Sidebar;
