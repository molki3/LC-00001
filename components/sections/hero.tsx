import { Button } from "../ui/button"


export function Hero(){
    return(
        <section className="bg-linear-to-r from-purple-600 via-pink-500 to-orange-500 ">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
                <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight">
                    Building{" "}
                    <span className="text-yellow-300">Digital Solutions</span>
                </h1>
                <p className="mt-6 max-w-2xl text-white/90 text-base sm:text-lg">
                    Innovation and Technology
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Button asChild className="bg-white text-black hover:bg-white/90">
                        <a href="#contact">Get in touch</a>
                    </Button>

                    <Button asChild variant="outline" className="bg-white text-black hover:bg-white/70">
                        <a href="#services">View services</a>
                    </Button>
                </div>
            </div>
        </section>
    )
}