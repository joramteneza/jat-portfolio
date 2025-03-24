"use client";

import { SectionAnimation } from "@/components/ui/section-animation";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGit,
  SiDocker,
  SiAmazonwebservices,
  SiVercel,
  SiFirebase,
  SiGraphql,
  SiNestjs,
  SiSpringboot,
  SiRedis,
  SiMysql,
  SiVuedotjs,
  SiPrisma,
  SiReactrouter,
} from "react-icons/si";

const frontendSkills = [
  { name: "JavaScript", icon: SiJavascript, proficiency: 95 },
  { name: "TypeScript", icon: SiTypescript, proficiency: 90 },
  { name: "React", icon: SiReact, proficiency: 95 },
  { name: "Next.js", icon: SiNextdotjs, proficiency: 90 },
  { name: "Vue.js", icon: SiVuedotjs, proficiency: 85 },
  { name: "React Native", icon: SiReactrouter, proficiency: 85 },
  { name: "Tailwind CSS", icon: SiTailwindcss, proficiency: 90 },
  { name: "HTML5", icon: SiHtml5, proficiency: 95 },
  { name: "CSS3", icon: SiCss3, proficiency: 90 },
];

const backendSkills = [
  { name: "Node.js", icon: SiNodedotjs, proficiency: 90 },
  { name: "NestJS", icon: SiNestjs, proficiency: 85 },
  { name: "Express", icon: SiExpress, proficiency: 85 },
  { name: "Spring Boot", icon: SiSpringboot, proficiency: 75 },
  { name: "GraphQL", icon: SiGraphql, proficiency: 80 },
  { name: "Prisma", icon: SiPrisma, proficiency: 85 },
];

const databaseSkills = [
  { name: "MongoDB", icon: SiMongodb, proficiency: 85 },
  { name: "PostgreSQL", icon: SiPostgresql, proficiency: 80 },
  { name: "MySQL", icon: SiMysql, proficiency: 80 },
  { name: "Redis", icon: SiRedis, proficiency: 75 },
];

const otherSkills = [
  { name: "AWS", icon: SiAmazonwebservices, proficiency: 80 },
  { name: "Docker", icon: SiDocker, proficiency: 75 },
  { name: "Git", icon: SiGit, proficiency: 90 },
  { name: "Firebase", icon: SiFirebase, proficiency: 80 },
  { name: "Vercel", icon: SiVercel, proficiency: 85 },
];

const SkillItem = ({ skill }: { skill: (typeof frontendSkills)[0] }) => {
  return (
    <motion.div
      className="flex flex-col items-center"
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative">
        <div className="w-16 h-16 flex items-center justify-center bg-card rounded-full shadow-md">
          <skill.icon className="h-8 w-8 text-primary" />
        </div>

        {/* Circular progress */}
        <svg
          className="absolute -top-1 -left-1 w-[72px] h-[72px]"
          viewBox="0 0 100 100"
        >
          <circle
            className="text-muted stroke-current"
            strokeWidth="4"
            fill="transparent"
            r="45"
            cx="50"
            cy="50"
          />
          <motion.circle
            className="text-primary stroke-current"
            strokeWidth="4"
            fill="transparent"
            r="45"
            cx="50"
            cy="50"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 45}`}
            initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
            whileInView={{
              strokeDashoffset:
                2 * Math.PI * 45 * (1 - skill.proficiency / 100),
            }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2 }}
          />
        </svg>
      </div>

      <p className="mt-3 font-medium text-sm">{skill.name}</p>
      <p className="text-xs text-muted-foreground">{skill.proficiency}%</p>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-card">
      <div className="section-container">
        <SectionAnimation>
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">
            A showcase of my technical abilities and expertise
          </p>
        </SectionAnimation>

        <div className="mt-12 space-y-12">
          <SectionAnimation delay={0.2}>
            <h3 className="text-2xl font-bold mb-6">Frontend Development</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-8">
              {frontendSkills.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>
          </SectionAnimation>

          <SectionAnimation delay={0.4}>
            <h3 className="text-2xl font-bold mb-6">Backend Development</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
              {backendSkills.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>
          </SectionAnimation>

          <SectionAnimation delay={0.6}>
            <h3 className="text-2xl font-bold mb-6">Database Management</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {databaseSkills.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>
          </SectionAnimation>

          <SectionAnimation delay={0.8}>
            <h3 className="text-2xl font-bold mb-6">DevOps & Tools</h3>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-8">
              {otherSkills.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>
          </SectionAnimation>
        </div>
      </div>
    </section>
  );
}
