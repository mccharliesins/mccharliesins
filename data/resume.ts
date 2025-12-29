
import { SquareTerminal, Github, Linkedin, Globe, Mail, CodeXml } from "lucide-react";

export const resumeData = {
  personalInfo: {
    name: "Venkateshwar Yadav",
    title: "GenAI & Python Developer",
    tagline: "Building Scryptify.AI | Generative AI | MERN Stack | Scalable Systems",
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
        name: "LeetCode",
        url: "https://leetcode.com/u/vkyd1909/",
        icon: CodeXml,
      },
      {
        name: "Email",
        url: "mailto:vkyd1909@gmail.com",
        icon: Mail,
      },
    ],
  },
  summary: "Creative GenAI & Python Developer with a strong foundation in Data Science and Full Stack Web Development. Founder of an early-stage AI startup and a Hackathon winner. Specialized in building autonomous agents, RAG systems, and scalable web applications using modern tech stacks.",
  skills: [
    "Generative AI & LLMs",
    "Python & PyTorch",
    "RAG & LangChain",
    "React & Next.js",
    "TypeScript",
    "Computer Vision (OpenCV)",
    "TensorFlow",
    "Docker & Kubernetes",
    "AWS & GCP",
    "SQL & NoSQL",
    "CI/CD & DevOps",
    "Cybersecurity",
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
      title: "AI Code Assistant",
      description: "VS Code extension using LLMs for real-time code suggestions, refactoring, and automated test generation. Integrated OpenAI and Hugging Face APIs.",
      tech: ["Python", "TypeScript", "LLMs", "VS Code API"],
      link: "#",
    },
    {
      title: "Autonomous Trading Bot",
      description: "High-frequency trading bot using Reinforcement Learning (PPO) and PyTorch. Features custom gym environments and live execution on Binance/MT5.",
      tech: ["Python", "PyTorch", "RL", "FastAPI"],
      link: "#",
    },
    {
      title: "RAG Document Chatbot",
      description: "Intelligent chatbot for querying PDF/Text documents using Retrieval-Augmented Generation. Built with LangChain, Pinecone, and GPT-4.",
      tech: ["LangChain", "OpenAI", "Pinecone", "Streamlit"],
      link: "#",
    },
    {
      title: "Scryptify AI",
      description: "A scalable AI technology solution built with Python and Google Cloud Platform. Launched MVP with a focus on secure development practices.",
      tech: ["Python", "GCP", "AI/ML", "React"],
      link: "https://scryptify.ai",
    },
    {
      title: "Portfolio Website",
      description: "Premium, dark-mode portfolio built with Next.js 15, Tailwind CSS, and Framer Motion. Features interactive particle backgrounds and bento grids.",
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
