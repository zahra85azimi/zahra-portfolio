import profileImage from "../../assets/images/profile/about-profile.JPEG";

function AboutImage() {
  return (
    <div className="relative flex justify-center">
      <div
        className="
          absolute
          h-80
          w-80
          rounded-full
          bg-sky-300/20
          blur-3xl
          dark:bg-sky-500/10
          transition-all
          duration-500
        "
      />
      <img
        src={profileImage}
        alt="About Zahra"
        className="
          relative
          h-[500px]
          w-[370px]
          rounded-[40px]
          border-8
          border-white
          object-cover
          shadow-2xl
          transition-all
          duration-500
          hover:scale-105
          dark:border-slate-800
        "
      />
    </div>
  );
}

export default AboutImage;
