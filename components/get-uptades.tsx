"use client";

import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input"

import { parseAsBoolean, useQueryState } from "nuqs";

const GetUpdates = () => {
    const [open, setOpen] = useQueryState("get-updates", parseAsBoolean.withDefault(false).withOptions({ clearOnDefault: true }));

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger
                className="bg-[#1e1e1e]/10 focus:ring-0 dark:focus:ring-0 hover:bg-orange-300/30 dark:bg-black/30 dark:hover:bg-orange-300/10 backdrop-blur-sm p-[5px_8px] rounded-[2px] items-center justify-center uppercase tracking-[-.3px] h-7 shadow-none text-xs dark:text-white text-black"
                asChild
            >
                <Button>Get_updates</Button>
            </DialogTrigger>
            <DialogContent className="rounded-[1px]">
                <DialogHeader>
                    <DialogTitle>Stay updated</DialogTitle>
                    <DialogDescription>
                        Subscribe to our newsletter to get the latest news and
                        updates.
                    </DialogDescription>
                </DialogHeader>


                <form action="">
                    <Input
                        type="email"
                        placeholder="Email address"
                        className="w-full"
                    />
                    <Button className="w-full mt-2">Subscribe</Button>
                </form>




            </DialogContent>
        </Dialog>
    )
}

export default GetUpdates