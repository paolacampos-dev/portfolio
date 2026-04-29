"use client";

import { motion } from "framer-motion";
import { caveat } from "@/lib/fonts"

export default function Hero() {
    return (
        <>         
        <section className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_center,_#3a2a22_0%,_#1f1612_65%,_#120c09_100%)]">
            
            <div className="text-center">
                <motion.p
                    className="text-[#c7b8a5]/70 tracking-wide text-sm sm:text-base"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Full-Stack Developer
                </motion.p>

                <motion.h1
                    className="font-signature text-[2.15rem] sm:text-[4rem] md:text-[5.5rem] text-orange-300 tracking-wide mb-3 sm:mb-4 mt-0"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                >
                    PaolaCampos<span className="text-orange-500">.dev</span>
                </motion.h1>

                <motion.p
                    className={`${caveat.className} text-sl sm:text-2xl font-medium tracking-wide text-orange-100/85`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
                >
                    Building practical digital tools <br className="sm:hidden" />for freelancers and small businesses 
                </motion.p>
            
            </div>
        </section>
    </>
    );
}

