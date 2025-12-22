export function Footer(){
    return(
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
                    {/* Contact */}
                    <div>
                        <div className="text-sm font-semibold">Contact</div>
                        <ul className="mt-3 space-y-2 font-sm text-white/70">
                            <li>+52 123 123 1234</li>
                            <li>a@a.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}