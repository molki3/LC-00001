import {Mail, Phone, CalendarDays, MapPin} from "lucide-react";


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
                        <Phone className="mt-0.5 h-5 w-5 text-muted-foreground"/>
                        <div className="rounded-xl border p-4">
                            <div className="font-medium">Phone</div>
                            <div className="text-sm text-muted-foreground">+52 00000000</div>
                        </div>
                        <Mail className="mt-0.5 h-5 w-5 text-muted-foreground"/>
                        <div className="rounded-xl border p-4">
                            <div className="font-medium">Email</div>
                            <div className="text-sm text-muted-foreground">algo@algo.com</div>
                        </div>
                        <MapPin className="mt-0.5 h-5 w-5 text-muted-foreground"/>
                        <div className="rounded-xl border p-4">
                            <div className="font-medium">Address</div>
                            <div className="text-sm text-muted-foreground">Mexico</div>
                        </div>
                    </div>
                    {/* Calendar */}
                    <div className="rounded-xl border bg-muted/30 p-6">
                        <div className="flex items-center gap-3">
                            <CalendarDays className="mt-0.5 h-5 w-5 text-muted-foreground"/>
                            <div>
                                <div className="font-medium">Schedule a call</div>
                                <p className="mt-1 text-sm  text-accent-foreground">
                                    Calendar embebed goes here
                                </p>
                            </div>
                        </div>
                        <div className="mt-6 flex h-56 items-center justify-center rounded-lg border bg-background text-sm text-muted-foreground">
                            Calendar Placeholder
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}