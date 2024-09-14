"use client";

import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ModeToggle } from "./mode-toggle"
import Link from "next/link";


const Header = () => {

    const ROUTES = [
        {
            content: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle"><circle cx="12" cy="12" r="10"/></svg>,
            url: "/"
        },
        {
            content: "Home",
            url: "/"
        },
        {
            content: "Github",
            url: "https://github.com/himel-studio/himel.studio"
        },
        {
            content: "X_Twitter",
            url: "/"
        }
    ]

    return (
        <header className="flex flex-wrap gap-x-[1px] pt-1">
            <nav className="flex flex-row gap-x-[1px] cursor-pointer">
                {ROUTES.map((route, index) => (
                    <Link key={index} href={route.url} className="bg-[#1e1e1e]/10 hover:bg-orange-300/30 dark:bg-black/30 dark:hover:bg-orange-300/10 backdrop-blur-sm p-[5px_8px] rounded-[2px] flex items-center justify-center uppercase tracking-[-.3px] text-xs ">
                        {route.content}
                    </Link>
                ))}


                <Dialog>
                    <DialogTrigger
                        className="bg-[#1e1e1e]/10 hover:bg-orange-300/30 dark:bg-black/30 dark:hover:bg-orange-300/10 backdrop-blur-sm p-[5px_8px] rounded-[2px] items-center justify-center uppercase tracking-[-.3px] text-xs "
                        asChild
                    >
                        <span>Get_updates</span>
                    </DialogTrigger>
                    <DialogContent className=" border-0 rounded-none">
                        <DialogHeader>
                            <DialogTitle>Stay updated</DialogTitle>
                            <DialogDescription>
                                Subscribe to our newsletter to get the latest news and
                                updates.
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </nav>


            <ModeToggle />

        </header>
    )
}

export default Header