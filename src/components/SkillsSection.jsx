import {
  Code,
  Palette,
  Globe,
  Camera,
  Database,
  Server,
  Cpu,
  LineChart,
  Figma,
  Layers,
  Smartphone,
  Zap,
} from "lucide-react";

const skills = [
  {
    category: "Frontend Development",
    icon: Code,
    color: "blue",
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    category: "Backend Development",
    icon: Server,
    color: "purple",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 70 },
      { name: "RESTful APIs", level: 80 },
      { name: "GraphQL", level: 65 },
    ],
  },
  {
    category: "Design",
    icon: Palette,
    color: "pink",
    skills: [
      { name: "UI/UX Design", level: 85 },
      { name: "Figma", level: 80 },
      { name: "Adobe XD", level: 75 },
      { name: "Photoshop", level: 70 },
    ],
  },
  {
    category: "Other Skills",
    icon: Zap,
    color: "green",
    skills: [
      { name: "Git/GitHub", level: 85 },
      { name: "Responsive Design", level: 90 },
      { name: "Performance Optimization", level: 75 },
      { name: "Testing", level: 70 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <div className="relative p-8">
      <div className="absolute inset-0 z-0" />

      <div className="relative z-10">
        <h2 className="inline-block mb-6 text-2xl font-bold text-[rgb(var(--dark))]">
          Skills & Expertise
          <div className="w-full h-1 mt-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
        </h2>

        <div className="grid grid-cols-1 gap-10 space-y-10 md:grid-cols-2">
          {skills.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index}>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-${category.color}-100 to-${category.color}-50 dark:from-${category.color}-900/50 dark:to-${category.color}-800/50`}
                  >
                    <Icon
                      className={`text-${category.color}-600 dark:text-${category.color}-400`}
                      size={20}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-[rgb(var(--dark))]">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-[rgb(var(--dark))]">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-2 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-700">
                        <div
                          className={`h-full bg-gradient-to-r from-${category.color}-500 to-${category.color}-600 rounded-full`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
