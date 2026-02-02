import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import { SERVICES } from "@/static/static"

export function Services() {
    return (
        <section id="services" className="bg-white py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <h2 className="text-2xl font-bold">Services</h2>
                <p className="mt-2 text-sm text-muted-foreground"> What Can I Build For You</p>

                <div className="mt-10 px-8 sm:px-0">
                    <Carousel className="mx-auto w-full max-w-5xl" opts={{ align: "start" }}>
                        <CarouselContent className="-ml-4">
                            {SERVICES.map(s => (
                                <CarouselItem key={s.title} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                                    <div className="h-full rounded-2xl border p-6 shadow-sm select-none">
                                        <div className="text-lg font-semibold">{s.title}</div>
                                        <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex" />
                        <CarouselNext className="hidden md:flex" />

                        {/* Mobile Navigation - visible only on small screens if desired, or keep hidden/custom */}
                        <div className="flex justify-center gap-4 mt-8 md:hidden">
                            <CarouselPrevious className="static translate-y-0" />
                            <CarouselNext className="static translate-y-0" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}