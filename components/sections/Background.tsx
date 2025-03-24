"use client";

import { SectionAnimation } from "@/components/ui/section-animation";
import { motion } from "framer-motion";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "Backend Developer (Consultant/Freelance)",
    company: "Roni AI",
    period: "November 2024 - Present",
    description:
      "Developing backend solutions and APIs using NestJS, NodeJS, MongoDB, and Prisma. Deploying applications to AWS Elastic Beanstalk and Render.",
    type: "work",
  },
  {
    title: "Software Engineer",
    company: "White Cloak Technologies, Inc.",
    period: "June 2023 - November 2024",
    description:
      "Deployed to an Australian client through staff augmentation. Developed and maintained web applications using NextJS, TypeScript, and AWS.",
    type: "work",
  },
  {
    title: "Full Stack Developer",
    company: "Ticketnation Philippines",
    period: "June 2022 - June 2023",
    description:
      "Pioneer developer, working closely with the CTO to build the backend API from scratch using NestJS, PostgreSQL, and Prisma. Built user-side platform and admin dashboards.",
    type: "work",
  },
  {
    title: "Full Stack Developer",
    company: "Altev Technologies",
    period: "September 2021 - June 2023",
    description:
      "Developed and deployed MERN stack applications for various international clients. Built scalable interfaces using ReactJS, NextJS, VueJS, and Tailwind CSS.",
    type: "work",
  },
  {
    title: "Front-End Developer",
    company: "Pahiram.ph",
    period: "September 2019 - September 2021",
    description:
      "Developed responsive web applications focusing on user interfaces using ReactJS and Tailwind CSS. Improved application performance through optimization techniques.",
    type: "work",
  },
  {
    title: "Bachelor of Science in Computer Science",
    company: "Cavite State University – Imus Campus",
    period: "2019 - 2022",
    description:
      "Bachelor of Science in Computer Science with focus on software development and web technologies.",
    type: "education",
  },
];

export default function Background() {
  return (
    <section id="experience" className="py-20 bg-card">
      <div className="section-container">
        <SectionAnimation>
          <h2 className="section-title">My Experience</h2>
          <p className="section-subtitle">
            My educational and professional journey
          </p>
        </SectionAnimation>

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <SectionAnimation key={index} delay={0.2 * index}>
                <div
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 * index + 0.2, duration: 0.3 }}
                  />

                  {/* Content */}
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    } pl-8 md:pl-0`}
                  >
                    <div className="bg-background p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-2">
                        {experience.type === "work" ? (
                          <Briefcase className="h-5 w-5 text-primary mr-2" />
                        ) : (
                          <GraduationCap className="h-5 w-5 text-primary mr-2" />
                        )}
                        <h3 className="text-xl font-bold">
                          {experience.title}
                        </h3>
                      </div>

                      <p className="text-primary font-medium">
                        {experience.company}
                      </p>

                      <div className="flex items-center text-muted-foreground mt-2 mb-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">{experience.period}</span>
                      </div>

                      <p className="text-muted-foreground">
                        {experience.description}
                      </p>
                    </div>
                  </div>

                  {/* Empty space for the other side */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </SectionAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
