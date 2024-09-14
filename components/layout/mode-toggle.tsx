"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ModeToggle() {
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    
    return (
        <button
            className="bg-[#1e1e1e]/10 hover:bg-orange-300/30 dark:bg-black/30 dark:hover:bg-orange-300/10 backdrop-blur-sm p-[5px_8px] rounded-[2px] items-center justify-center uppercase tracking-[-.3px] text-xs"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "dark" ? "LIGHT" : "DARK"}
        </button>
    );
}
