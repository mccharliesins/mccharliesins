"use client";
import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[90vh] px-4 text-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] -z-10" />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="text-sm md:text-base text-purple-300 font-medium uppercase tracking-[0.2em] mb-4 bg-white/5 border border-white/10 px-4 py-2 rounded-full inline-block backdrop-blur-sm">
                    PORTFOLIO 2025
                </h2>
                <h1 className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400 font-outfit mb-6 drop-shadow-sm">
                    {resumeData.personalInfo.name}
                </h1>
                <p className="max-w-2xl mx-auto text-zinc-300 md:text-xl mb-10 leading-relaxed font-light">
                    {resumeData.summary}
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    {resumeData.personalInfo.social.map((social, i) => (
                        <motion.div
                            key={social.name}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                        >
                            <Link
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                className="p-3 bg-white/5 rounded-full hover:bg-purple-500/20 hover:scale-110 hover:border-purple-500/50 transition-all duration-300 border border-white/10 block group"
                            >
                                <social.icon className="w-6 h-6 text-zinc-400 group-hover:text-purple-300 transition-colors" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
