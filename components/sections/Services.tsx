"use client";

import { SectionAnimation } from "@/components/ui/section-animation";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Layout,
  Server,
  Smartphone,
  Sparkles,
  Workflow,
  Cloud,
} from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces with React, Next.js, Vue.js, and TypeScript. Implementing state management with Redux and Zustand.",
    icon: Layout,
  },
  {
    title: "Backend Development",
    description:
      "Creating robust server-side applications with Node.js (NestJS, Express), Java (Spring Boot), and GraphQL. Implementing RESTful APIs and microservices.",
    icon: Server,
  },
  {
    title: "Full Stack Development",
    description:
      "End-to-end application development using MERN stack and other modern technologies. Seamless integration between frontend and backend systems.",
    icon: Code,
  },
  {
    title: "Database Design",
    description:
      "Designing and optimizing databases using MongoDB, PostgreSQL, and MySQL. Implementing efficient data models and query optimization.",
    icon: Database,
  },
  {
    title: "Mobile Development",
    description:
      "Creating cross-platform mobile applications using React Native for both iOS and Android platforms.",
    icon: Smartphone,
  },
  {
    title: "Cloud Services",
    description:
      "Deploying and managing applications on AWS (EC2, S3, Lambda, Amplify, Elastic Beanstalk, RDS). Implementing CI/CD pipelines for automated deployments.",
    icon: Cloud,
  },
  {
    title: "API Development",
    description:
      "Designing and implementing RESTful and GraphQL APIs with proper documentation using Swagger. Ensuring security, performance, and scalability.",
    icon: Workflow,
  },
  {
    title: "UI/UX Collaboration",
    description:
      "Working closely with designers to transform Figma designs into functional, responsive interfaces with attention to detail and user experience.",
    icon: Sparkles,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="section-container">
        <SectionAnimation>
          <h2 className="section-title">My Services</h2>
          <p className="section-subtitle">
            Here are the services I offer to help bring your digital ideas to
            life
          </p>
        </SectionAnimation>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <SectionAnimation key={index} delay={0.1 * index}>
              <motion.div
                className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full"
                whileHover={{ y: -5, backgroundColor: "var(--primary-5)" }}
              >
                <div className="p-4 rounded-full bg-primary/10 w-fit mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            </SectionAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
