"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose} from "@/components/ui/sheet"
import { Menu } from "lucide-react";

export function Navbar() {
    return(
        <header className="fixed inset-x-0 z-50 top-0 bg-linear-to-r from-purple-600 via-pink-500 to-orange-500">
            <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
                
                {/* LOGO */}
                <Link href="/" className="text-lg font-semibold text-white hover:opacity-90 transition-opacity">
                    LC
                </Link>

                {/* DESKTOP */}
                <nav className="hidden md:flex items-center gap-8">
                    <a href="/" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                        Home
                    </a>
                    <a href="#services" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                        Services
                    </a>
                    <a href="#who-we-are" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                        Who We Are
                    </a>
                    <a href="#contact" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                        Contact
                    </a>
                </nav>

                {/* MOBILE */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" className="text-white hover:bg-white/10">
                                {/* Lucide Icon */}
                                <Menu className="h-5 w-5"/>
                                <span className="sr-only">Menu</span>
                            </Button>
                        </SheetTrigger>

                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>LC</SheetTitle>
                            </SheetHeader>

                            <nav className="mt-6 px-5 flex flex-col gap-4">
                                <SheetClose asChild>
                                    <a className="text-sm font-medium hover-underline" href="/">
                                        Home
                                    </a>
                                </SheetClose>
                                <SheetClose asChild>
                                    <a className="text-sm font-medium hover-underline" href="#services">
                                        Services
                                    </a>
                                </SheetClose>
                                <SheetClose asChild>
                                    <a className="text-sm font-medium hover-underline" href="#who-we-are">
                                        Who We Are
                                    </a>
                                </SheetClose>
                                <SheetClose asChild>
                                    <a className="text-sm font-medium hover-underline" href="#contact">
                                        Contact
                                    </a>
                                </SheetClose>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>

            </div>
            <div className="h-px bg-white/10"></div>
        </header>
    )
}