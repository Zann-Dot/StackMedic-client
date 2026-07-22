import { Badge } from "./ui/badge"

export default function HowItWorksSection() {
    return (
        <section id="how-it-works" className="flex w-full flex-col items-center justify-center gap-y-5 px-5 pt-10 md:px-0">
            <Badge className="mt-10 border border-gray-200 bg-teal-50 pt-1 text-teal-700 dark:border-0 dark:bg-teal-950 dark:text-teal-300">
                How It Works
            </Badge>
            <h1 className="max-w-xl text-foreground dark:text-transparent dark:bg-linear-to-r from-teal-500 to-emerald-400 bg-clip-text text-center text-3xl font-bold md:max-w-2xl md:text-4xl lg:max-w-5xl">
                Resolving runtime errors has{" "}
                <span className="text-teal-500 dark:text-transparent">never been easier.</span>
            </h1>

            <sub className="max-w-2xl text-center text-base text-muted-foreground md:text-xl lg:max-w-3xl">
                Follow these simple steps to get started with StackMedic.
            </sub>

            <div className="mx-auto flex max-w-5xl flex-col items-center px-4 py-12 text-center">
                <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-3">
                    <div className="flex flex-col items-center px-4">
                        <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-900/30  text-lg font-bold text-emerald-600">
                            1
                        </div>
                        <h3 className="mb-3 text-xl font-interphases font-bold text-gray-900 dark:text-foreground">
                            Paste Your Code
                        </h3>
                        <p className="max-w-lg font-interphases leading-relaxed text-gray-500">
                            Drop your raw, messy stack traces or failing code blocks directly
                            into the raw code editor console.
                        </p>
                    </div>

                    <div className="flex flex-col items-center px-4">
                        <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-lg font-bold text-emerald-600">
                            2
                        </div>
                        <h3 className="mb-3 text-xl font-interphases font-bold text-gray-900 dark:text-foreground">
                            Isolate the Bug
                        </h3>
                        <p className="max-w-lg font-interphases leading-relaxed text-gray-500">
                            Watch our diagnostic engine automatically parse the code,
                            highlighting the exact lines where the failure occurs.
                        </p>
                    </div>

                    <div className="flex flex-col items-center px-4">
                        <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-lg font-bold text-emerald-600">
                            3
                        </div>
                        <h3 className="mb-3 text-xl font-interphases font-bold text-gray-900 dark:text-foreground">
                            Deploy the Fix
                        </h3>
                        <p className="max-w-lg font-interphases leading-relaxed text-gray-500">
                            Review the remediated script options in the clean panel, copy the
                            corrected logic, and push it live.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
