"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Menu } from "lucide-react";
import { useState } from "react";

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        e.preventDefault();
        const duration = 1000;
        setIsMobileMenuOpen(false);

        // Handle "Home" or top of page
        if (targetId === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Fallback or use custom animation if strictly needed, but let's stick to the custom one for consistency if we want "slow"
            // Actually, for consistency with the "slow" requirement:
            const targetPosition = 0;
            const startPosition = window.scrollY;
            const distance = targetPosition - startPosition;
            let start: number | null = null;

            const animation = (currentTime: number) => {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            };
            requestAnimationFrame(animation);
            return;
        }

        const target = document.querySelector(targetId);
        if (!target) return;

        const targetPosition = target.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        let start: number | null = null;

        const animation = (currentTime: number) => {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        const easeInOutCubic = (t: number, b: number, c: number, d: number) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
        };

        requestAnimationFrame(animation);
    };

    return (
        <header className="fixed inset-x-0 z-50 top-0 bg-linear-to-r from-purple-600 via-pink-500 to-orange-500">
            <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">

                {/* LOGO */}
                <Link href="/" className="text-lg font-semibold text-white hover:opacity-90 transition-opacity">
                    LC
                </Link>

                {/* DESKTOP */}
                <nav className="hidden md:flex items-center gap-8">
                    <a href="#hero" onClick={(e) => smoothScroll(e, '#hero')} className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                        Home
                    </a>
                    <a href="#services" onClick={(e) => smoothScroll(e, '#services')} className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                        Services
                    </a>
                    <a href="#who-we-are" onClick={(e) => smoothScroll(e, '#who-we-are')} className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                        Who We Are
                    </a>
                    <a href="#contact" onClick={(e) => smoothScroll(e, '#contact')} className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                        Contact
                    </a>
                </nav>

                {/* MOBILE */}
                <div className="md:hidden">
                    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" className="text-white hover:bg-white/10">
                                {/* Lucide Icon */}
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Menu</span>
                            </Button>
                        </SheetTrigger>

                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>LC</SheetTitle>
                            </SheetHeader>

                            <nav className="mt-6 px-5 flex flex-col gap-4">
                                <SheetClose asChild>
                                    <a className="text-sm font-medium hover-underline" href="#hero" onClick={(e) => smoothScroll(e, '#hero')}>
                                        Home
                                    </a>
                                </SheetClose>
                                <SheetClose asChild>
                                    <a className="text-sm font-medium hover-underline" href="#services" onClick={(e) => smoothScroll(e, '#services')}>
                                        Services
                                    </a>
                                </SheetClose>
                                <SheetClose asChild>
                                    <a className="text-sm font-medium hover-underline" href="#who-we-are" onClick={(e) => smoothScroll(e, '#who-we-are')}>
                                        Who We Are
                                    </a>
                                </SheetClose>
                                <SheetClose asChild>
                                    <a className="text-sm font-medium hover-underline" href="#contact" onClick={(e) => smoothScroll(e, '#contact')}>
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