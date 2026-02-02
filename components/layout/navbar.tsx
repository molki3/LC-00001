"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Menu } from "lucide-react";
import { useNavigation } from "@/hooks/use-navigation";
import { SECTIONS } from "@/static/static"
import { CONTACT_INFORMATION } from "@/static/static"

export function Navbar() {
    // Removed local state and function
    const { isMobileMenuOpen, setIsMobileMenuOpen, smoothScroll } = useNavigation();

    return (
        <header className="fixed inset-x-0 z-50 top-0 bg-linear-to-r from-purple-600 via-pink-500 to-orange-500">
            <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">

                {/* LOGO */}
                <Link href="/" className="text-lg font-semibold text-white hover:opacity-90 transition-opacity">
                    {CONTACT_INFORMATION[0].value}
                </Link>

                {/* DESKTOP */}
                <nav className="hidden md:flex items-center gap-8">
                    {SECTIONS.map(s => (
                        <a key={s.title} href={s.href} onClick={(e) => smoothScroll(e, s.href)} className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                            {s.title}
                        </a>
                    ))}
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
                                <SheetTitle>Menu</SheetTitle>
                            </SheetHeader>

                            <nav className="mt-6 px-5 flex flex-col gap-4">
                                {SECTIONS.map(s => (
                                    <SheetClose asChild key={s.title}>
                                        <a className="text-sm font-medium hover-underline" href={s.href} onClick={(e) => smoothScroll(e, s.href)}>
                                            {s.title}
                                        </a>
                                    </SheetClose>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>

            </div>
            <div className="h-px bg-white/10"></div>
        </header>
    )
}