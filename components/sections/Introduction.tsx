"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SiGithub, SiLinkedin } from "react-icons/si";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/joramteneza",
    icon: SiGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/kymngye",
    icon: SiLinkedin,
  },
  {
    name: "Email",
    href: "mailto:joram.a.teneza@example.com",
    icon: Mail,
  },
];

export default function Introduction() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <motion.span
              className="text-primary font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Hello, I'm
            </motion.span>

            <motion.h1
              className="text-4xl md:text-6xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Joram Teneza
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Software Engineer
            </motion.h2>

            <motion.p
              className="text-muted-foreground max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Full Stack Developer with over 5 years of experience in building
              scalable, high-performance applications with modern technologies.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button asChild>
                <Link href="#contact">Get in touch</Link>
              </Button>

              <Button variant="outline" asChild>
                <Link
                  href="/static/pdf/Joram-Profile.pdf"
                  target="_blank"
                  download
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Link>
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-card hover:bg-primary/20 transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </Link>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto lg:ml-auto"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src="/placeholder.svg?height=320&width=320"
                alt="Joram Teneza"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -inset-4 rounded-full bg-primary/5 blur-xl" />
            <div className="absolute -z-10 top-10 -right-10 w-20 h-20 rounded-full bg-primary/20 blur-xl" />
            <div className="absolute -z-10 -bottom-5 -left-5 w-16 h-16 rounded-full bg-primary/20 blur-xl" />
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 0.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <Link
            href="#about"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
