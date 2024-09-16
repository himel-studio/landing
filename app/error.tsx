"use client";

import { useEffect } from 'react'
import { motion } from "framer-motion";
import ShiftingText from "@/components/ui/shifting-text"

interface ErrorProps {
    error: Error & { digest?: string }
    reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <section className="md:text-9xl text-4xl uppercase">
            <motion.h1 className="" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3.3 }}>{"ERROR <?/>"}</motion.h1>
            <ShiftingText text="Something went wrong!" className="text-red-400" />
            <button onClick={() => reset()}>Try again</button>
        </section>
    )
}