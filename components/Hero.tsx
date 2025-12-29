"use client";
import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[90vh] px-4 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-sm md:text-base text-zinc-400 uppercase tracking-widest mb-4">
                    PORTFOLIO 2025
                </h2>
                <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 font-outfit mb-6">
                    {resumeData.personalInfo.name}
                </h1>
                <p className="max-w-2xl mx-auto text-zinc-400 md:text-lg mb-8 leading-relaxed">
                    {resumeData.summary}
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    {resumeData.personalInfo.social.map((social) => (
                        <Link
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/10"
                        >
                            <social.icon className="w-5 h-5 text-zinc-300" />
                        </Link>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
