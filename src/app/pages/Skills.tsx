export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-10 px-2 md:px-10 lg:px-20 bg-gradient-to-b from-black via-gray-950 to-black"
    >
   
      {/* Grid container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Executive */}
        
        <SkillCategory title="Skills" glow>
             {/* Title */}
      <div className="flex justify-left mb-6">
        <h2 className="text-2xl font-extrabold text-white tracking-wider">
          EXECUTIVE
        </h2>
      </div>

          <SkillBox
            title="Project Leadership"
            description="Leading technology, artistic and design projects."
          />
          <SkillBox
            title="Institutional Experience"
            description="Worked at the Legislature and public institutions."
          />
        </SkillCategory>

        {/* Web / Digital */}
        <SkillCategory title="Web / Digital">
          <SkillBox title="React / Next.js / Astro / Vue.js / Three.js / CSS / Tailwind" />
   
        </SkillCategory>

        {/* Audiovisual */}
        <SkillCategory title="Audiovisual" glow>
          <SkillBox
            title="Film Director"
            description="Award-winning independent filmmaker."
          />
          <SkillBox
            title="Resolume"
            description="Experienced VJ for live performances."
          />
          <SkillBox
            title="Adobe Premiere / After Effects"
            description="Advanced video editing and motion graphics."
          />
          <SkillBox
            title="Photography"
            description="Professional DSLR & mirrorless systems."
          />
        </SkillCategory>

        {/* Artistic */}
        <SkillCategory title="Artistic" glow>
          <SkillBox title="Illustration" description="Digital and analog techniques." />
          <SkillBox title="3D Modeling" description="Blender and Cinema4D." />
          <SkillBox title="Sound Design" description="Field recording and experimental audio." />
          <SkillBox title="Concept Art" description="Design for multimedia projects." />
        </SkillCategory>

        {/* Tools & Platforms */}
        <SkillCategory title="Tools & Platforms">
          <SkillBox title="Figma / Adobe XD" description="UI/UX prototyping tools." />
          <SkillBox title="Notion / Trello" description="Team organization & productivity." />
          <SkillBox title="Git / GitHub" description="Version control and collaboration." />
          <SkillBox title="DaVinci Resolve" description="Professional color grading." />
        </SkillCategory>

        {/* Other */}
        <SkillCategory title="Other">
          <SkillBox title="Creative Direction" description="Concept and vision for multimedia projects." />
          <SkillBox title="Public Speaking" description="Experience in teaching and workshops." />
          <SkillBox title="Languages" description="Fluent in Spanish and English." />
        </SkillCategory>
      </div>
    </section>
  );
}

function SkillCategory({
  title,
  glow = false,
  children,
}: {
  title: string;
  glow?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`rounded-3xl border border-white/10 p-8 backdrop-blur-lg
      ${glow
        ? "bg-gradient-to-br from-violet-400/10 via-fuchsia-500/10 to-pink-400/10 shadow-[0_0_50px_10px_rgba(255,0,255,0.1)]"
        : "bg-white/5"
      }`}
    >
      <h3 className="text-2xl font-bold mb-6 text-white tracking-wide">
        {title}
      </h3>
      <div className="grid grid-cols-1 gap-4">
        {children}
      </div>
    </div>
  );
}

function SkillBox({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div
      className="p-4 rounded-2xl bg-black/40 hover:bg-black/60 transition duration-300
      border border-white/5 shadow-lg shadow-black/30"
    >
      <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
      {description && <p className="text-sm text-gray-400">{description}</p>}
    </div>
  );
}
