"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function SpotlightBackground() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="fixed inset-0 -z-10 h-full w-full bg-black">
            {/* Base Grid - Very subtle everywhere */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-20" />

            {/* Spotlight Grid - Only visible under mouse */}
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,#a855f750_1px,transparent_1px),linear-gradient(to_bottom,#a855f750_1px,transparent_1px)] bg-[size:14px_24px]"
                style={{
                    maskImage: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
                    WebkitMaskImage: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
                }}
            />

            {/* Ambient Top Light */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#a855f720,#000)] opacity-40 blur-[80px] pointer-events-none"></div>
        </div>
    );
}
