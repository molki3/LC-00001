export function Footer() {
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
                            <li>
                                <a href="/" className="hover:text-white transition-colors">Home</a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-white transition-colors">Services</a>
                            </li>
                            <li>
                                <a href="#who-we-are" className="hover:text-white transition-colors">Who We Are</a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <div className="text-sm font-semibold">Contact</div>
                        <ul className="mt-3 space-y-2 font-sm text-white/70">
                            <li>+52 123 123 1234</li>
                            <li>a@a.com</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-white/50">
                    <p>&copy; {new Date().getFullYear()} LC. All rights reserved &reg;</p>
                </div>
            </div>
        </footer>
    )
}