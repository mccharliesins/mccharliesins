"use client";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Code, GraduationCap, Mail } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const navItems = [
    { name: "Home", icon: Home, href: "#" },
    { name: "Skills", icon: Code, href: "#skills" },
    { name: "Projects", icon: Briefcase, href: "#projects" },
    { name: "Experience", icon: User, href: "#experience" },
    { name: "Education", icon: GraduationCap, href: "#education" },
    { name: "Contact", icon: Mail, href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
        >
            <div className={cn(
                "flex items-center gap-1 md:gap-2 px-3 py-3 rounded-full border transition-all duration-300",
                scrolled
                    ? "bg-black/50 backdrop-blur-md border-white/10 shadow-2xl shadow-purple-500/10"
                    : "bg-white/5 border-white/5 backdrop-blur-sm"
            )}>
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="p-2 md:p-3 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-all group relative"
                    >
                        <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black border border-white/10 px-2 py-1 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                            {item.name}
                        </span>
                    </Link>
                ))}
            </div>
        </motion.div>
    );
}
