"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Home, User, Briefcase, Code, GraduationCap, Mail } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useRef } from "react";

const navItems = [
    { name: "Home", icon: Home, href: "#" },
    { name: "Skills", icon: Code, href: "#skills" },
    { name: "Projects", icon: Briefcase, href: "#projects" },
    { name: "Experience", icon: User, href: "#experience" },
    { name: "Education", icon: GraduationCap, href: "#education" },
    { name: "Contact", icon: Mail, href: "#contact" },
];

export default function Navbar() {
    const mouseX = useMotionValue(Infinity);

    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex h-16 items-end gap-4 rounded-full bg-neutral-900/40 px-4 pb-3 backdrop-blur-2xl border border-white/10" // Simplified container
        >
            {navItems.map((item) => (
                <Icon key={item.name} mouseX={mouseX} item={item} />
            ))}
        </motion.div>
    );
}

function Icon({ mouseX, item }: { mouseX: any; item: any }) {
    const ref = useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseX, (val: number) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

    const width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
    const height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <Link href={item.href}>
            <motion.div
                ref={ref}
                style={{ width, height }}
                className="aspect-square rounded-full bg-white/10 border border-white/5 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/50 transition-colors group relative"
            >
                <item.icon className="w-5 h-5 text-zinc-400 group-hover:text-purple-300" />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black border border-white/10 px-2 py-1 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    {item.name}
                </span>
            </motion.div>
        </Link>
    );
}
