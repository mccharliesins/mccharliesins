"use client";
import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";

export default function Skills() {
    return (
        <section className="py-20 px-4 bg-white/5 border-y border-white/5" id="skills">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-xl md:text-2xl font-bold text-zinc-400 mb-8 uppercase tracking-widest">
                    Technical Arsenal
                </h2>
                <div className="flex flex-wrap justify-center gap-3">
                    {resumeData.skills.map((skill, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className="px-4 py-2 rounded-full bg-black border border-white/10 text-zinc-300 hover:border-purple-500/50 hover:text-purple-300 transition-colors cursor-default"
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </div>
        </section>
    );
}
