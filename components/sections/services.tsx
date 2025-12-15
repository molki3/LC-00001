import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"

export function Services(){
    const SERVICES = [
        {title: "Serv1", desc: "desc1"},
        {title: "Serv2", desc: "desc2"},
        {title: "Serv3", desc: "desc3"},
        {title: "Serv4", desc: "desc4"},
        {title: "Serv5", desc: "desc5"}
    ]
    return(
         <section id="services" className="bg-white">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
                <h2 className="text-2xl font-bold">Services</h2>
                <p className="mt-2 text-sm text-muted-foreground"> What Can I Build For You</p>

                {/* MOBILE */}
                <div className="mt-10 md:hidden">
                    <Carousel className="mx-auto w-full max-w-xs text-center">
                        <CarouselContent>
                            {SERVICES.map(s => (
                                <CarouselItem>
                                    <div className="text-lg font-semibold">{s.title}</div>
                                    <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>

                {/* DESKTOP */}
                <div className="mt-10 hidden md:flex md:gap-6">
                    {SERVICES.map(s => (
                        <div key={s.title} className="flex-1 rounded-2xl border p-6 shadow-sm">
                            <div className="text-lg font-semibold">{s.title}</div>
                            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}