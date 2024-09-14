// "use client";

// import { useEffect, useState } from "react";
// import { useTheme } from "next-themes";

// export function ModeToggle() {
//     const { setTheme, theme } = useTheme();
//     const [mounted, setMounted] = useState(false);

//     useEffect(() => {
//         setMounted(true);
//     }, []);

//     if (!mounted) return null;

//     return (
//         <button
//             className="bg-[#1e1e1e]/10 hover:bg-orange-300/30 dark:bg-black/30 dark:hover:bg-orange-300/10 backdrop-blur-sm p-[5px_8px] rounded-[2px] items-center justify-center uppercase tracking-[-.3px] text-xs"
//             onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//         >
//             {theme === "dark" ? "LIGHT" : "DARK"}
//         </button>
//     );
// }


"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
    const { setTheme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className=" bg-[#1e1e1e]/10 focus:ring-0 dark:focus:ring-0 hover:bg-orange-300/30 dark:bg-black/30 dark:hover:bg-orange-300/10 backdrop-blur-sm p-[5px_8px] rounded-[2px] items-center justify-center uppercase tracking-[-.3px] h-7 shadow-none">
                    <SunIcon className="h-[0.8rem] w-[0.8rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 dark:text-white text-black" />
                    <MoonIcon className="absolute h-[0.8rem] w-[0.8rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:text-white text-black" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-[#1e1e1e]/10  dark:bg-black/30 da backdrop-blur-sm uppercase tracking-[-.3px] text-xs rounded-[2px] ">
                <DropdownMenuItem onClick={() => setTheme("light")} className="text-xs hover:bg-orange-300/30 dark:hover:bg-orange-300/10 rounded-[2px]">
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")} className="text-xs hover:bg-orange-300/30 dark:hover:bg-orange-300/10 rounded-[2px]">
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")} className="text-xs hover:bg-orange-300/30 dark:hover:bg-orange-300/10 rounded-[2px]">
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
