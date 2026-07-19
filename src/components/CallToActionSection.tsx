import { Button } from "@base-ui/react/button";
import { ArrowRight } from "lucide-react";

export default function CallToActionSection() {
    return (
        <div className="flex w-full flex-col items-center justify-center gap-y-5 bg-linear-to-l from-emerald-500 to-teal-500/80 px-5 py-20 md:px-0 dark:bg-secondary/10">
            <h2 className="mb-4 font-interphases text-3xl font-bold tracking-tight text-white md:text-4xl">
                Ready to simplify full-stack debugging?
            </h2>

            <p className="mx-auto mb-8 max-w-xl font-interphases text-base leading-relaxed text-emerald-100 md:text-lg">
                Join thousands of developers who have made troubleshooting cryptic
                runtime errors stress-free.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button className="group inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3 font-interphases text-sm font-semibold text-emerald-700 shadow-sm transition-colors hover:bg-emerald-50 sm:w-auto md:text-base">
                    Get started
                    <ArrowRight className="ms-1" />
                </Button>

                <Button className="group inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3 font-interphases text-sm font-semibold text-emerald-700 shadow-sm transition-colors hover:bg-emerald-50 sm:w-auto md:text-base">
                    Invite Team
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2.5"
                        stroke="currentColor"
                        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                    </svg>
                </Button>
            </div>
        </div>
    )
}
