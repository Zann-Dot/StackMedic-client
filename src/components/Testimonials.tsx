import { Badge } from "./ui/badge"

export default function Testimonials() {
    return (
        <div className="flex w-full flex-col items-center justify-center gap-y-5 bg-secondary/40 px-5 pt-10 md:px-0 dark:bg-secondary/10">
            <Badge className="mt-10 border border-gray-200 bg-teal-50 pt-1 text-teal-700 dark:border-0 dark:bg-teal-950 dark:text-teal-300">
                Testimonials
            </Badge>
            <h1 className="max-w-xl bg-linear-to-r from-teal-500 to-emerald-400 bg-clip-text text-center text-3xl font-bold text-transparent md:max-w-2xl md:text-4xl lg:max-w-5xl">
                What our users are saying.
            </h1>

            <div className="mx-0 grid max-w-3xl grid-cols-1 gap-6 px-0 py-8 sm:px-4 md:mx-10 md:grid-cols-2 lg:max-w-5xl lg:grid-cols-3 xl:mx-auto">
                <div className="flex md:min-h-62.5 flex-col justify-between rounded-3xl border border-gray-200 dark:border-accent-content bg-background p-8 text-center shadow-sm">
                    <p className="mb-6 font-interphases text-base leading-relaxed text-gray-500">
                        "Before StackMedic, I spent hours staring at cryptic production
                        error traces. Now, I paste the breakdown, get the exact fix, and
                        push it immediately."
                    </p>
                    <div className="flex w-full max-w-xs items-center gap-3 text-left md:justify-start">
                        <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-200">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVkYoXdIhrj3WL4A66ocqIxqnTD6Z7EVswRnU8KGNtI_Ed1hzA4WMCmGc&s=10"
                                alt="monkey D luffy"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div>
                            <h4 className="font-interphases text-sm font-bold text-foreground">
                                Monkey D. Luffy
                            </h4>
                            <p className="font-interphases text-xs text-gray-400">
                                Full-Stack Engineer
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex md:min-h-62.5 flex-col justify-between rounded-3xl border border-gray-200 dark:border-accent-content bg-background p-8 text-center shadow-sm">
                    <p className="mb-6 font-interphases text-base leading-relaxed text-gray-500">
                        "The optional chaining errors were breaking our live site.
                        StackMedic didn't just point out the problem; it rewritten the clean
                        implementation directly."
                    </p>
                    <div className="flex w-full max-w-xs items-center gap-3 text-left md:justify-start">
                        <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-200">
                            <img
                                src="https://www.dexerto.com/cdn-image/wp-content/uploads/2023/04/20/one-piece-zoro-in-wano-arc.jpeg?width=1200&quality=60&format=auto"
                                alt="zoro"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div>
                            <h4 className="font-interphases text-sm font-bold text-foreground">
                                Roronoa Zoro
                            </h4>
                            <p className="font-interphases text-xs text-gray-400">
                                Backend Developer
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex md:min-h-62.5 flex-col justify-between rounded-3xl border border-gray-200 dark:border-accent-content bg-background p-8 text-center shadow-sm">
                    <p className="mb-6 font-interphases text-base leading-relaxed text-gray-500">
                        "I love the complete focus layout. No complex analytical charts, no
                        corporate fluff—just the source trace and the solution
                        side-by-side."
                    </p>
                    <div className="flex w-full max-w-xs items-center gap-3 text-left md:justify-start">
                        <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-200">
                            <img
                                src="https://preview.redd.it/what-are-ur-thoughts-about-nami-does-she-make-it-to-ur-top-v0-zr0by4wi48rf1.jpg?width=640&crop=smart&auto=webp&s=e3d93e9c566359f0a559c6412d45a93fda61f88c"
                                alt="Nami"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div>
                            <h4 className="font-interphases text-sm font-bold text-foreground">
                                Nami
                            </h4>
                            <p className="font-interphases text-xs text-gray-400">
                                UI/UX Engineer
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
