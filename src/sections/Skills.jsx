import SkillsContent from "../components/skills/SkillsContent";

function Skills() {
  return (
    <section
      id="skills"
      className="
        px-6
        py-24
        lg:px-20
        bg-slate-50
        dark:bg-slate-950
        transition-colors
        duration-500
      "
    >
      <div className="mx-auto max-w-7xl">
        <SkillsContent />
      </div>
    </section>
  );
}

export default Skills;
