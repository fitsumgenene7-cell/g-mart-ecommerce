import { BadgeCheck, ShieldCheck, Zap } from "lucide-react";

const About = () => {
    return (
        <>
        <section id="about" className="bg-blue-800">
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-3xl font-semibold font-montserrat text-white pt-8">Built with intention</h1>
                <p className="pt-4 font-montserrat text-gray-300 text-sm font-light">
                    We believe shopping should feel thoughtful, not overwhelming.
                    That’s why we focus <br /> on quality, simplicity, and timeless design.
                </p>

                <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-4 sm:gap-6 w-fit sm:w-full max-w-3xl mx-auto place-items-center">
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                            <BadgeCheck className="h-5 w-5 text-white" />
                        </span>
                        <div className="hidden sm:block text-left">
                            <p className="font-montserrat font-semibold text-white">Quality</p>
                            <p className="font-montserrat text-sm text-white/80">Curated essentials</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                            <Zap className="h-5 w-5 text-white" />
                        </span>
                        <div className="hidden sm:block text-left">
                            <p className="font-montserrat font-semibold text-white">Efficiency</p>
                            <p className="font-montserrat text-sm text-white/80">Fast, simple shopping</p>
                        </div>
                    </div>

                    <div className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2 sm:gap-3">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                            <ShieldCheck className="h-5 w-5 text-white" />
                        </span>
                        <div className="hidden sm:block text-left">
                            <p className="font-montserrat font-semibold text-white">Reliability</p>
                            <p className="font-montserrat text-sm text-white/80">Trusted experience</p>
                        </div>
                    </div>
                </div>


            </div>
        </section>
        </>
    )
}

export default About