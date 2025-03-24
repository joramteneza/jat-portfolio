"use client";

import { SectionAnimation } from "@/components/ui/section-animation";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="section-container">
        <SectionAnimation>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Here you'll find more information about me, what I do, and my
            current skills
          </p>
        </SectionAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <SectionAnimation delay={0.3}>
            <div className="relative">
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Joram Teneza working"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 -inset-4 rounded-lg bg-primary/5 blur-xl" />
              <div className="absolute -z-10 top-10 -right-10 w-20 h-20 rounded-full bg-primary/20 blur-xl" />
              <div className="absolute -z-10 -bottom-5 -left-5 w-16 h-16 rounded-full bg-primary/20 blur-xl" />

              {/* Stats */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-card p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">5+</p>
                    <p className="text-sm text-muted-foreground">
                      Years Experience
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">50+</p>
                    <p className="text-sm text-muted-foreground">Projects</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </SectionAnimation>

          <SectionAnimation delay={0.4}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Get to know me!</h3>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a{" "}
                  <span className="text-primary font-medium">
                    Full Stack Web Developer
                  </span>{" "}
                  with over 5 years of experience in web application
                  development, specializing in front-end and back-end
                  technologies.
                </p>

                <p>
                  Highly skilled in MERN stack, JavaScript frameworks, GraphQL,
                  SQL, and MongoDB. Adept at building scalable, high-performance
                  applications, leveraging cloud services (AWS, Docker, CI/CD),
                  and implementing best coding practices.
                </p>

                <p>
                  I have a proven ability to collaborate in agile environments
                  and deliver optimized, user-friendly solutions. I enjoy the
                  entire process of development, from problem solving to
                  designing and implementing elegant user interfaces.
                </p>

                <p>
                  I'm open to job opportunities where I can contribute, learn,
                  and grow. If you have a good opportunity that matches my
                  skills and experience, don't hesitate to contact me.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="text-2xl font-bold">Personal Interests</h3>

                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                    Writing technical content on JavaScript and backend
                    optimization
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                    Contributing to open source projects
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                    Exploring cloud architecture and scalable systems
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                    Continuous learning and skill development
                  </li>
                </ul>
              </div>
            </div>
          </SectionAnimation>
        </div>
      </div>
    </section>
  );
}
