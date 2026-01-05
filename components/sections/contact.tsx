import { Mail, Phone, MapPin } from "lucide-react";
import { BookingWidget } from "../booking/booking-widget";

export function Contact() {
    return (
        <section id="contact" className="bg-white py-16">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="mb-12 text-center md:text-left">
                    <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
                    <p className="mt-2 text-muted-foreground">
                        Let's talk about your project and how we can help.
                    </p>
                </div>

                {/* Contact Methods Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="flex items-center gap-4 p-4 rounded-xl border bg-card hover:bg-muted/50 transition-colors">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Phone className="h-5 w-5" />
                        </div>
                        <div>
                            <div className="font-medium text-sm">Phone</div>
                            <div className="text-sm text-muted-foreground">+52 (55) 1234-5678</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-xl border bg-card hover:bg-muted/50 transition-colors">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Mail className="h-5 w-5" />
                        </div>
                        <div>
                            <div className="font-medium text-sm">Email</div>
                            <div className="text-sm text-muted-foreground">contact@lc-agency.com</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-xl border bg-card hover:bg-muted/50 transition-colors">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                            <div className="font-medium text-sm">Location</div>
                            <div className="text-sm text-muted-foreground">Mexico City, Mexico</div>
                        </div>
                    </div>
                </div>

                {/* Booking Widget Area */}
                <div className="mt-8">
                    <BookingWidget />
                </div>
            </div>
        </section>
    );
}