"use client";
import { resumeData } from "@/data/resume";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { FolderCode, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <section className="py-20 px-4" id="projects">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 font-outfit">
                    Featured <span className="text-purple-400">Projects</span>
                </h2>
                <BentoGrid>
                    {resumeData.projects.map((project, i) => (
                        <BentoGridItem
                            key={i}
                            title={
                                <div className="flex items-center gap-2">
                                    {project.title}
                                    <Link href={project.link} target="_blank">
                                        <ExternalLink className="w-4 h-4 text-zinc-500 hover:text-white transition-colors" />
                                    </Link>
                                </div>
                            }
                            description={project.description}
                            header={
                                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/5 p-4 relative overflow-hidden group/header">
                                    <div className="absolute inset-0 bg-dot-white/[0.2] [mask-image:radial-gradient(black,transparent)]" />
                                    <div className="z-10 flex flex-wrap gap-2 content-end h-full">
                                        {project.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="px-2 py-1 text-xs rounded-md bg-purple-500/10 text-purple-200 border border-purple-500/20"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            }
                            icon={<FolderCode className="h-4 w-4 text-neutral-500" />}
                            className={i === 0 ? "md:col-span-2" : ""}
                        />
                    ))}
                </BentoGrid>
            </motion.div>
        </section>
    );
}
