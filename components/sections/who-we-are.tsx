export function WhoWeAre(){
    return(
        <section id="who-we-are" className="bg-white">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
                <div className="grid items-center gap-10 md:grid-cols-2">
                    {/* TEXT */}
                    <div>
                        <h2 className="text-2xl font-bold">Who We Are</h2>
                        <p className="mt-4 text-sm text-muted-foreground">
                            Lazaro Citizen builds modern digital solutions for businesses that
                            want to grow, automate, and improve their customer experience.
                        </p>

                        <p className="mt-4 text-sm text-muted-foreground">
                            We focus on clean design, solid engineering, and clear communication
                            to deliver reliable products.
                        </p>
                    </div>
                    
                    {/* IMAGE */}
                    <div className="rounded-2xl border bg-gray-400 p-6">
                        <div className="aspect-video w-full rounded-2lg bg-muted"/>
                    </div>
                </div>
            </div>
        </section>
    )
}