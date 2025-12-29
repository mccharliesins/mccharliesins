"use client";
import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
    return (
        <section className="py-20 px-4 max-w-4xl mx-auto" id="experience">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 font-outfit">
                    Work <span className="text-purple-400">Experience</span>
                </h2>

                <div className="space-y-12 relative border-l-2 border-white/5 ml-4 md:ml-0 md:pl-8">
                    {resumeData.experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-0 group"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] md:-left-[41px] top-0 w-4 h-4 rounded-full bg-zinc-900 border-2 border-purple-500 group-hover:bg-purple-500 group-hover:shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all duration-300" />

                            <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors font-outfit">{exp.role}</h3>
                                    <div className="text-purple-400 font-medium text-lg">{exp.company}</div>
                                </div>
                                <div className="text-sm text-zinc-400 font-mono bg-white/5 border border-white/10 px-3 py-1 rounded-full group-hover:border-purple-500/30 transition-colors">
                                    {exp.period}
                                </div>
                            </div>
                            <p className="text-zinc-400 leading-relaxed mt-4 group-hover:text-zinc-300 transition-colors">
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
