export function Contact(){
    return(
        <section id="contact" className="bg-white">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
                {/* Header */}
                <h2 className="text-2xl font-bold">Get in Touch</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                    Let's talk about your project
                </p>

                <div className="mt-10 grid gap-8 md:grid-cols-2">
                    {/* Contact Info */}
                    <div className="space-y-4">
                        <div className="rounded-xl border p-4">
                            <div className="font-medium">Phone</div>
                            <div className="text-sm text-muted-foreground">+52 00000000</div>
                        </div>
                        <div className="rounded-xl border p-4">
                            <div className="font-medium">Email</div>
                            <div className="text-sm text-muted-foreground">algo@algo.com</div>
                        </div>
                        <div className="rounded-xl border p-4">
                            <div className="font-medium">Address</div>
                            <div className="text-sm text-muted-foreground">LZC, Mich, Mx</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}