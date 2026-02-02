"use client";

import { CONTACT_INFORMATION, SECTIONS } from "@/static/static"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

export function Footer() {
    const { smoothScroll } = useSmoothScroll();
    return (
        <footer className="bg-slate-950 text-white">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
                <div className="grid gap-10 md:grid-cols-3">
                    {/* Brand */}
                    <div>
                        <div className=" text-lg font-semibold">LC</div>
                        <p className="mt-3 text-sm text-white/70">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illum eveniet sed exercitationem vitae, dicta enim voluptatem. Tempora ea eius officia! Eum architecto ipsam accusamus molestias quae eius harum? Enim!
                        </p>
                    </div>
                    {/* Navigation */}
                    <div>
                        <div className="text-sm font-semibold">Navigation</div>
                        <ul className="mt-3 space-y-2 text-sm text-white/70">
                            {SECTIONS.map(s => (
                                <li key={s.title}>
                                    <a href={s.href} onClick={(e) => smoothScroll(e, s.href)} className="hover:text-white transition-colors">{s.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <div className="text-sm font-semibold">Contact</div>
                        <ul className="mt-3 space-y-2 font-sm text-white/70">
                            {CONTACT_INFORMATION.map(c => (
                                <li key={c.title}>{c.value}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-white/50">
                    <p>&copy; {new Date().getFullYear()} {CONTACT_INFORMATION[0].value}. All rights reserved &reg;</p>
                </div>
            </div>
        </footer>
    )
}