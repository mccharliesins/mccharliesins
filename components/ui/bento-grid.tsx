
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-2xl hover:shadow-purple-500/10 transition duration-300 shadow-input p-6 bg-black border border-white/10 justify-between flex flex-col space-y-4 relative overflow-hidden",
                className
            )}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 border border-white/5 group-hover/bento:border-purple-500/50 rounded-xl transition-colors duration-300" />

            <div className="relative z-10">
                {header}
                <div className="group-hover/bento:translate-x-2 transition duration-200 mt-4">
                    <div className="bg-zinc-800/50 p-2 w-fit rounded-lg mb-4 border border-white/5 group-hover/bento:border-purple-500/30 group-hover/bento:bg-purple-500/10 transition-colors">
                        {icon}
                    </div>
                    <div className="font-outfit font-bold text-neutral-600 dark:text-neutral-200 mb-2 text-lg">
                        {title}
                    </div>
                    <div className="font-sans font-normal text-neutral-600 text-sm dark:text-zinc-400 group-hover/bento:text-zinc-300">
                        {description}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
