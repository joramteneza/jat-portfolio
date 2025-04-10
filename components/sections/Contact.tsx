"use client";

import type React from "react";
import { useState } from "react";
import { SectionAnimation } from "@/components/ui/section-animation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Link from "next/link";
import { SiGithub, SiLinkedin, SiMedium } from "react-icons/si";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "joram.a.teneza@gmail.com",
    href: "mailto:joram.a.teneza@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+63 (949) 849-8394",
    href: "tel:+639498498394",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mandaluyong City, NCR",
    href: "https://www.google.com/maps/place/Niagara+Tower+at+Acqua+Private+Residences",
  },
];

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
    name: "Medium",
    href: "https://medium.com/@joram.teneza",
    icon: SiMedium,
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error("Error sending message.");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="section-container">
        <SectionAnimation>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Feel free to contact me for any project or collaboration
          </p>
        </SectionAnimation>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <SectionAnimation delay={0.2}>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Contact Information</h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="p-3 rounded-full bg-primary/10 mr-4">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target={
                          item.label === "Location" ? "_blank" : undefined
                        }
                        rel={
                          item.label === "Location"
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {item.value}
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-card hover:bg-primary/20 transition-colors border border-border flex items-center justify-center"
                        aria-label={link.name}
                      >
                        <link.icon className="h-5 w-5" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </SectionAnimation>

          <SectionAnimation delay={0.4}>
            <div className="bg-background p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

              {isSubmitted ? (
                <motion.div
                  className="bg-primary/10 border border-primary/20 text-primary p-4 rounded-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className="font-medium">Thank you for your message!</p>
                  <p className="text-sm">
                    I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Hello, I'd like to talk about..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="h-4 w-4 rounded-full border-2 border-primary-foreground border-t-transparent mr-2"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </SectionAnimation>
        </div>
      </div>
    </section>
  );
}
