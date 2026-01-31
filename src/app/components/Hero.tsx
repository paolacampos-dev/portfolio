"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <>         
        <section className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_center,_#3a2a22_0%,_#1f1612_65%,_#120c09_100%)]">
            
        <div className="text-center">
            <motion.h1
                className="font-signature text-[2rem] sm:text-[3.5rem] md:text-[5rem] text-orange-300 tracking-wide"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                /*className="font-signature text-6xl md:text-7xl"
                initial={{ opacity: 0, rotate: +3, y: 5 }}
                animate={{ opacity: 1, rotate: -3, y: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}*/
            >
            PaolaCampos<span className="text-orange-500">.dev</span>
            </motion.h1>

            <motion.p
                //className="mt-6 text-lg opacity-80 "
                className="mt-4 font-medium tracking-wide text-orange-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
            Web Designer & Front-End Developer<br />
            {/* <span className="opacity-80">UI-focused</span> */}
            </motion.p>
            
        </div>
        </section>
    </>
    );
}

