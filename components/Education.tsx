"use client";
import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
    return (
        <section className="py-20 px-4" id="education">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 font-outfit">
                    Academic <span className="text-purple-400">Background</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {resumeData.education.map((edu, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 hover:bg-white/[0.07] transition-all group"
                        >
                            <div className="mb-4 w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                                <GraduationCap className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 font-outfit">
                                {edu.school}
                            </h3>
                            <div className="text-zinc-400 mb-4 h-12">{edu.degree}</div>
                            <div className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-zinc-500 border border-white/5">
                                {edu.period}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
