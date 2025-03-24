import { Mail, FileText } from "lucide-react";
import Link from "next/link";
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
  {
    name: "Resume",
    href: "/resume.pdf",
    icon: FileText,
  },
];

export default function Footer() {
  return (
    <footer className="bg-card py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold text-primary">Joram Teneza</p>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
