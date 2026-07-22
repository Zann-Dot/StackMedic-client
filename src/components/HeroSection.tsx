import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { motion } from "motion/react"

const MotionButton = motion.create(Button)
export default function HeroSection() {
    return (
        <section className="mt-5 flex w-full flex-col items-center justify-center gap-y-5 px-5 md:mt-10 md:gap-y-10 md:pt-10">
            <Badge className="border border-gray-200 bg-teal-50 pt-1 text-teal-700 dark:border-0 dark:bg-teal-950 dark:text-teal-300">
                Explore · Analyze · Code
            </Badge>

            <h1 className="max-w-xl bg-linear-to-r from-teal-500 to-emerald-400 bg-clip-text text-center text-4xl font-semibold text-transparent md:max-w-2xl md:text-7xl lg:max-w-5xl">
                The smartest way to analyze code with AI.
            </h1>

            <sub className="text-center text-base text-muted-foreground max-w-4xl md:text-xl">
                Paste raw stack traces, decode cryptic runtime errors, and deploy clean
                code patches instantly. Never lose track of the bugs that break your
                build.
            </sub>

            <div className="hero-section-ctr flex gap-x-4">
                <MotionButton
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.1, ease: "easeInOut" }}
                    className="rounded-lg bg-black from-primary to-emerald-500/40 hover:bg-linear-to-l dark:bg-linear-to-l"
                >
                    Get started
                    <ArrowRight className="ms-1" />
                </MotionButton>

                <motion.a
                    href="#how-it-works"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.1, ease: "easeInOut" }}
                    className="inline-flex items-center rounded-lg border from-primary to-emerald-500/40 px-3 py-1 text-sm hover:bg-linear-to-l hover:text-white"
                >
                    See how it works
                </motion.a>
            </div>

            <article className="mt-15 flex gap-4 flex-col md:flex-row w-full sm:max-w-340 items-center justify-center">
                <div className="mockup-code w-1/1 sm:w-100 bg-secondary/50 text-foreground/70 dark:text-foreground">
                    <pre data-prefix=">">
                        <code className="font-mono">
                            <span className="font-bold text-blue-400 dark:font-normal dark:text-blue-300/80">
                                let
                            </span>{" "}
                            myApiRes;
                        </code>
                    </pre>
                    <pre data-prefix=">">
                        <code className="font-mono">
                            <span className="font-bold text-blue-400 dark:font-normal dark:text-blue-300/80">
                                try
                            </span>{" "}
                            {"{"}
                        </code>
                    </pre>
                    <pre data-prefix=">">
                        {" "}
                        <code className="font-mono">
                            <span className="text-teal-600 dark:text-teal-200/70">
                                console
                            </span>
                            .
                            <span className="text-yellow-600 dark:text-yellow-200/90">
                                log
                            </span>
                            (myApiRes.
                            <span className="text-yellow-600 underline decoration-destructive underline-offset-4 dark:text-yellow-200/90">
                                data
                            </span>
                            .results);
                        </code>
                    </pre>
                    <pre data-prefix=">">
                        <code className="font-mono">
                            {"}"}{" "}
                            <span className="font-bold text-blue-400 dark:font-normal dark:text-blue-300/80">
                                catch
                            </span>{" "}
                            (error) {"{"}
                        </code>
                    </pre>
                    <pre data-prefix=">">
                        {" "}
                        <code className="font-mono">
                            <span className="text-teal-600 dark:text-teal-200/70">
                                console
                            </span>
                            .
                            <span className="text-yellow-600 dark:text-yellow-200/90">
                                error
                            </span>
                            (error);
                        </code>
                    </pre>
                    <pre data-prefix=">">
                        <code className="font-mono">{"}"}</code>
                    </pre>
                    <pre></pre>
                    <pre></pre>
                </div>

                <div className="max-w-40 hidden md:block">
                    <DotLottieReact
                        src="https://lottie.host/38154f89-d4d1-4e13-be52-5ee88d65d890/lVpP7jptrk.lottie"
                        loop
                        autoplay
                        width={96}
                        height={96}
                        className="w-30 hidden lg:inline"
                    />
                </div>

                <div className="mockup-code w-1/1 sm:w-100 bg-linear-to-bl from-teal-100 to-secondary text-foreground/70 dark:from-emerald-900/80 dark:to-secondary/50 dark:text-foreground">
                    <pre data-prefix=">">
                        <code className="font-mono">
                            <span className="font-bold text-blue-400 dark:font-normal dark:text-blue-300/80">
                                let
                            </span>{" "}
                            myApiRes;
                        </code>
                    </pre>
                    <pre data-prefix=">">
                        <code className="font-mono">
                            <span className="font-bold text-blue-400 dark:font-normal dark:text-blue-300/80">
                                try
                            </span>{" "}
                            {"{"}
                        </code>
                    </pre>
                    <pre data-prefix=">" className="bg-destructive/10">
                        {" "}
                        <code className="font-mono">
                            <span className="text-teal-600 dark:text-teal-200/70">
                                console
                            </span>
                            .
                            <span className="text-yellow-600 dark:text-yellow-200/90">
                                log
                            </span>
                            (myApiRes?.
                            <span className="text-yellow-600 dark:text-yellow-200/90">
                                data?
                            </span>
                            .results);
                        </code>
                    </pre>
                    <pre data-prefix=">">
                        <code className="font-mono">
                            {"}"}{" "}
                            <span className="font-bold text-blue-400 dark:font-normal dark:text-blue-300/80">
                                catch
                            </span>{" "}
                            (error) {"{"}
                        </code>
                    </pre>
                    <pre data-prefix=">">
                        {" "}
                        <code className="font-mono">
                            <span className="text-teal-600 dark:text-teal-200/70">
                                console
                            </span>
                            .
                            <span className="text-yellow-600 dark:text-yellow-200/90">
                                error
                            </span>
                            (error);
                        </code>
                    </pre>
                    <pre data-prefix=">">
                        <code className="font-mono">{"}"}</code>
                    </pre>
                    <pre></pre>
                    <pre></pre>
                </div>
            </article>
        </section>
    )
}
