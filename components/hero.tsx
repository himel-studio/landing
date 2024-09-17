"use client";

import { motion } from "framer-motion";
import ShiftingText from "@/components/ui/shifting-text"
import CountDown from "./countdown";

const Welcome = () => {
    return (
        <>
            <section className="md:text-9xl text-4xl uppercase">
                <motion.h1 className="text-7xl px-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3.3 }}>Welcome to</motion.h1>
                <ShiftingText text="himel.studio" className="text-orange-400" />
            </section>
            <section className="md:text-4xl text-4xl uppercase flex">
                <CountDown />
            </section>
        </>

    )
}

export default Welcome