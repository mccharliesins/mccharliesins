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

                <div className="space-y-12 relative border-l border-white/10 ml-4 md:ml-0 md:pl-8">
                    {resumeData.experience.map((exp, i) => (
                        <div key={i} className="relative pl-8 md:pl-0">
                            {/* Timeline Dot */}
                            <div className="absolute -left-[5px] md:-left-[37px] top-0 w-3 h-3 rounded-full bg-purple-500 ring-4 ring-black" />

                            <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                    <div className="text-purple-400 font-medium">{exp.company}</div>
                                </div>
                                <div className="text-sm text-zinc-500 font-mono bg-white/5 px-2 py-1 rounded">
                                    {exp.period}
                                </div>
                            </div>
                            <p className="text-zinc-400 leading-relaxed mt-4">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
