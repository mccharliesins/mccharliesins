
import { SquareTerminal, Github, Linkedin, Globe, Mail } from "lucide-react";

export const resumeData = {
  personalInfo: {
    name: "Venkateshwar Yadav",
    title: "Full Stack Developer",
    tagline: "Building Scryptify.AI | MERN Stack | React Native | Scalable Backend Systems",
    location: "Toronto, Ontario, Canada",
    email: "vkyd1909@gmail.com",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mccharliesins",
        icon: Linkedin,
      },
      {
        name: "GitHub",
        url: "https://github.com/mccharliesins",
        icon: Github,
      },
      {
        name: "Scryptify.ai",
        url: "https://scryptify.ai",
        icon: Globe,
      },
      {
        name: "Email",
        url: "mailto:vkyd1909@gmail.com",
        icon: Mail,
      },
    ],
  },
  summary: "Creative and adaptable Full Stack Developer with real-world experience building and scaling web, mobile, and AI solutions. Founder of an early-stage AI startup and a Hackathon winner (3rd place at North America's largest blockchain hackathon). Passionate about high-performance apps and UI/UX.",
  skills: [
    "React Native",
    "MERN Stack",
    "Next.js",
    "TypeScript",
    "Python",
    "Google Cloud Platform",
    "Tailwind CSS",
    "Framer Motion",
    "CI/CD & DevOps",
    "Blockchain Basics",
  ],
  experience: [
    {
      company: "Scryptify AI",
      role: "Full Stack Developer & Founder",
      period: "Aug 2025 - Present",
      description: "Leading engineering and design to launch a scalable AI technology solution. Utilizing Python and GCP to build secure, industry-standard infrastructure. Managing milestone-driven development in an agile environment.",
    },
    {
      company: "Perplexity",
      role: "Campus Ambassador",
      period: "Sep 2025 - Present",
      description: "Coordinating campus tech and AI events for over 100 students. Fostering engagement with emerging technologies and aligning technical initiatives with business fundamentals.",
    },
  ],
  projects: [
    {
      title: "Scryptify AI",
      description: "A scalable AI technology solution built with Python and Google Cloud Platform. Launched MVP with a focus on secure development practices and high-performance architecture.",
      tech: ["Python", "GCP", "AI/ML", "React"],
      link: "https://scryptify.ai",
    },
    {
      title: "Blockchain Hackathon Win",
      description: "Secured 3rd position at North America's largest blockchain hackathon. Developed a decentralized application (dApp) prototype under high-pressure constraints.",
      tech: ["Blockchain", "Solidity", "Web3"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "A premium, dark-mode portfolio website built with Next.js 15, Tailwind CSS, and Framer Motion. Features a bento-grid layout to showcase projects and skills.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      link: "https://github.com/mccharliesins/mccharliesins",
    },
  ],
  education: [
    {
      school: "Centennial College",
      degree: "Computer Systems Technology - Networking",
      period: "2024 - 2026",
    },
    {
      school: "Savitribai Phule Pune University",
      degree: "Bachelor of Computer Applications (BCA)",
      period: "2020 - 2023",
    },
  ],
};
