"use client";
import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    return (
        <section className="py-32 px-4 relative overflow-hidden" id="contact">
            {/* Background Gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center"
            >
                <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500 font-outfit mb-6">
                    Ready to create something full stack?
                </h2>
                <p className="text-zinc-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                    Whether you have a project in mind or just want to chat about the latest in Tech, AI or Blockchain — I am always open to new opportunities.
                </p>

                <Link
                    href={`mailto:${resumeData.personalInfo.email}`}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-zinc-200 transition-colors group"
                >
                    <Mail className="w-5 h-5" />
                    <span>Get in Touch</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </motion.div>
        </section>
    );
}
