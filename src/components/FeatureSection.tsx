import { CircleCheck, CirclePlus, Clock3, Monitor, Search } from "lucide-react"
import { Badge } from "./ui/badge"

export default function FeatureSection() {
    return (
        <section className="flex w-full flex-col items-center justify-center gap-y-5 bg-secondary/40 px-5 pt-10 md:px-0 dark:bg-secondary/10">
            <Badge className="mt-10 border border-gray-200 bg-teal-50 pt-1 text-teal-700 dark:border-0 dark:bg-teal-950 dark:text-teal-300">
                Features
            </Badge>
            <h1 className="max-w-xl bg-linear-to-r from-teal-500 to-emerald-400 bg-clip-text text-center text-3xl font-bold text-transparent md:max-w-2xl md:text-4xl lg:max-w-5xl">
                Everything you need to debug and remediate errors effortlessly.
            </h1>

            <sub className="max-w-2xl text-center text-base text-muted-foreground md:text-xl lg:max-w-3xl">
                Our platform offers a comprehensive suite of features designed to make
                managing code health and system infrastructure a breeze.
            </sub>

            <div className="mx-0 grid max-w-3xl grid-cols-1 gap-6 px-0 py-8 sm:px-4 md:mx-10 md:grid-cols-2 lg:max-w-5xl lg:grid-cols-3 xl:mx-auto">
                <div className="flex flex-col items-center rounded-2xl border border-gray-200 bg-background p-6 text-center shadow-sm dark:border-accent-content">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30">
                        <CirclePlus />
                    </div>
                    <h3 className="mb-2 font-interphases text-lg font-bold text-foreground">
                        Error Ingestion
                    </h3>
                    <p className="font-interphases leading-relaxed text-muted-foreground">
                        Paste raw, messy stack traces or runtime logs directly into the
                        primary code panel to kickstart diagnostics.
                    </p>
                </div>

                <div className="flex flex-col items-center rounded-2xl border border-gray-200 bg-background p-6 text-center shadow-sm dark:border-accent-content">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-50 text-cyan-600 dark:bg-cyan-900/30">
                        <Search />
                    </div>
                    <h3 className="mb-2 font-interphases text-lg font-bold text-foreground">
                        Deep Diagnostics
                    </h3>
                    <p className="font-interphases leading-relaxed text-muted-foreground">
                        Automatically isolate logic failures, undefined variables, and
                        broken operations hidden within your codeblocks.
                    </p>
                </div>

                <div className="flex flex-col items-center rounded-2xl border border-gray-200 bg-background p-6 text-center shadow-sm dark:border-accent-content">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30">
                        <CircleCheck />
                    </div>
                    <h3 className="mb-2 font-interphases text-lg font-bold text-foreground">
                        Automated Remediation
                    </h3>
                    <p className="font-interphases leading-relaxed text-muted-foreground">
                        Generate clean, optimized, and safe code options instantly to
                        replace faulty structures in the response panel.
                    </p>
                </div>

                <div className="flex flex-col items-center rounded-2xl border border-gray-200 bg-background p-6 text-center shadow-sm dark:border-accent-content">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-amber-600 dark:bg-amber-900/30">
                        <Clock3 />
                    </div>
                    <h3 className="mb-2 font-interphases text-lg font-bold text-foreground">
                        Contextual Highlights
                    </h3>
                    <p className="font-interphases leading-relaxed text-muted-foreground">
                        Spot exact locations of failure points via side-by-side visual
                        indicators comparing input errors to corrections.
                    </p>
                </div>

                <div className="flex flex-col items-center rounded-2xl border border-gray-200 bg-background p-6 text-center shadow-sm dark:border-accent-content">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376A8.965 8.965 0 0012 12.75c-.197 0-.393.006-.588.019m5.338 4.466l-4.5-4.5m0 0l4.5-4.5M12 12.75V3m0 0L7.5 7.5M12 3l4.5 4.5"
                            />
                        </svg>
                    </div>
                    <h3 className="mb-2 font-interphases text-lg font-bold text-foreground">
                        Instant Copy-Paste
                    </h3>
                    <p className="font-interphases leading-relaxed text-muted-foreground">
                        Extract ready-to-deploy, debugged blocks directly into your
                        environment setup with a single action.
                    </p>
                </div>

                <div className="flex flex-col items-center rounded-2xl border border-gray-200 bg-background p-6 text-center shadow-sm dark:border-accent-content">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-50 text-cyan-600 dark:bg-cyan-900/30">
                        <Monitor />
                    </div>
                    <h3 className="mb-2 font-interphases text-lg font-bold text-foreground">
                        Clean UI Layout
                    </h3>
                    <p className="font-interphases leading-relaxed text-muted-foreground">
                        A purely code-centric view engineered completely without
                        distractions to optimize your daily focus flow.
                    </p>
                </div>
            </div>
        </section>
    )
}
