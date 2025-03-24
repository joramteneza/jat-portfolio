"use client";

import { SectionAnimation } from "@/components/ui/section-animation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";

const projects = [
  {
    title: "Altev Technologies",
    description:
      "Corporate website built for Altev Technologies with server-side rendering and static site generation capabilities.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "TypeScript"],
    liveUrl: "https://www.altev.tech/",
  },
  {
    title: "Ticketnation Platform",
    description:
      "A full-featured event ticketing platform with ticket purchasing, event management, and analytics dashboards for organizers.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["NestJS", "PostgreSQL", "Prisma", "NextJS", "AWS", "Docker"],
    liveUrl: "https://www.ticketnation.ph/",
  },
  {
    title: "Roni AI Backend",
    description:
      "Backend API system for an AI-powered application, featuring user management, data processing, and integration with machine learning models.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["NestJS", "MongoDB", "Prisma", "AWS", "TypeScript"],
    liveUrl: "https://www.roni.ai/",
  },
  {
    title: "Memory Match Game",
    description:
      "A fun memory game built with full-stack technologies, showcasing real-time state management and database integration.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Prisma", "MongoDB", "TypeScript"],
    liveUrl: "https://memory-match-smoky.vercel.app/",
    githubUrl: "https://github.com/joramteneza/memory-game",
  },
  {
    title: "Financial Goals Timeline",
    description:
      "A timeline visualization tool to plan and track financial goals using GraphQL, Apollo, and modern web stack.",
    image: "/placeholder.svg?height=400&width=600",
    tags: [
      "GraphQL",
      "Apollo",
      "Prisma",
      "Node.js",
      "React",
      "Vite",
      "MongoDB",
    ],
    liveUrl: "https://dev-test-lovat.vercel.app/",
    githubUrl: "https://github.com/joramteneza/dev-test",
  },
  {
    title: "Fun88",
    description:
      "A tabbed betting UI showcasing modular React components and strong TypeScript typing.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React.js", "TypeScript"],
    liveUrl: "https://fun88-fe.vercel.app/?tab=start",
    githubUrl: "https://github.com/joramteneza/fun88-fe",
  },
  {
    title: "Todo List App",
    description:
      "A simple and clean todo application using Vite and TypeScript for daily productivity tracking.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Vite", "React", "TypeScript"],
    liveUrl: "https://todo-app-vite-react.vercel.app/",
    githubUrl: "https://github.com/joramteneza/todo-app-vite-react",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="section-container">
        <SectionAnimation>
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            A selection of my recent work and personal projects
          </p>
        </SectionAnimation>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <SectionAnimation key={index} delay={0.2 * index}>
              <motion.div
                className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <Button size="sm" variant="default" asChild>
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live Demo
                      </Link>
                    </Button>
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <SiGithub className="h-4 w-4 mr-1" />
                          Code
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </SectionAnimation>
          ))}
        </div>

        <SectionAnimation delay={0.8}>
          <div className="mt-12 text-center">
            <Button asChild>
              <Link
                href="https://github.com/joramteneza"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub className="h-4 w-4 mr-2" />
                View More on GitHub
              </Link>
            </Button>
          </div>
        </SectionAnimation>
      </div>
    </section>
  );
}
