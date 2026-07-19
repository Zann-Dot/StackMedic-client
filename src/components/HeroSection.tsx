import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

export default function HeroSection() {
    return (
        <section className="mt-10 flex flex-col items-center justify-center gap-y-10">
            <Badge className="border border-gray-200 bg-teal-50 pt-1 text-teal-700 dark:border-0 dark:bg-teal-950 dark:text-teal-300">
                Explore · Analyze · Code
            </Badge>

            <h1 className="bg-linear-to-r from-teal-500 to-emerald-400 bg-clip-text text-center text-7xl font-semibold text-transparent">
                The smartest way to <br />
                analyze code with AI.
            </h1>

            <sub className="text-center text-xl text-muted-foreground">
                Paste raw stack traces, decode cryptic runtime errors, and deploy
                clean code patches instantly. <br />
                Never lose track of the bugs that break your build.
            </sub>

            <div className="hero-section-ctr flex gap-x-4">
                <Button className="rounded-lg bg-black hover:bg-linear-to-l from-primary to-emerald-500/40">
                    Get started
                    <ArrowRight className="ms-1" />
                </Button>

                <Button variant="outline" className="rounded-lg hover:bg-linear-to-l from-primary to-emerald-500/40 hover:text-white">
                    See how it works
                </Button>
            </div>

            <article className="mt-15 flex items-center w-full">
                <div className="mockup-code w-100 bg-secondary/50 text-foreground/70 dark:text-foreground">
                    <pre data-prefix=">">
                        <code className="font-mono">
                            <span className="font-bold dark:font-normal text-blue-400 dark:text-blue-300/80">let</span> myApiRes;
                        </code>
                    </pre>
                    <pre data-prefix=">">
                        <code className="font-mono">
                            <span className="font-bold dark:font-normal text-blue-400 dark:text-blue-300/80">try</span> {"{"}
                        </code>
                    </pre>
                    <pre data-prefix=">">
                        {" "}{" "}<code className="font-mono">
                            <span className="text-teal-600 dark:text-teal-200/70">console</span>.
                            <span className="text-yellow-600 dark:text-yellow-200/90">log</span>(myApiRes.
                            <span className="text-yellow-600 dark:text-yellow-200/90 underline underline-offset-4 decoration-destructive">
                                data
                            </span>
                            .results);
                        </code>
                    </pre>
                    <pre data-prefix=">">
                        <code className="font-mono">
                            {"}"}  <span className="font-bold dark:font-normal text-blue-400 dark:text-blue-300/80">catch</span> (error)  {"{"}
                        </code>
                    </pre>
                    <pre data-prefix=">">
                        {" "}{" "}<code className="font-mono">
                            <span className="text-teal-600 dark:text-teal-200/70">console</span>.
                            <span className="text-yellow-600 dark:text-yellow-200/90">error</span>(error);
                        </code>
                    </pre>
                    <pre data-prefix=">">
                        <code className="font-mono">
                            {"}"}
                        </code>
                    </pre>
                    <pre></pre>
                    <pre></pre>
                </div>

                <div className="max-w-40">
                    <DotLottieReact
                        src="https://lottie.host/38154f89-d4d1-4e13-be52-5ee88d65d890/lVpP7jptrk.lottie"
                        loop
                        autoplay
                        width={96}
                        height={96}
                        className="w-30"
                    />
                </div>

                <div className="mockup-code w-100 bg-linear-to-bl from-teal-100 to-secondary dark:from-emerald-900/80 dark:to-secondary/50 text-foreground/70 dark:text-foreground">
                    <pre data-prefix=">">
                        <code className="font-mono">
                            <span className="font-bold dark:font-normal text-blue-400 dark:text-blue-300/80">let</span> myApiRes;
                        </code>
                    </pre>
                    <pre data-prefix=">">
                        <code className="font-mono">
                            <span className="font-bold dark:font-normal text-blue-400 dark:text-blue-300/80">try</span> {"{"}
                        </code>
                    </pre>
                    <pre data-prefix=">" className="bg-destructive/10">
                        {" "}{" "}<code className="font-mono">
                            <span className="text-teal-600 dark:text-teal-200/70">console</span>.
                            <span className="text-yellow-600 dark:text-yellow-200/90">log</span>(myApiRes?.
                            <span className="text-yellow-600 dark:text-yellow-200/90">
                                data?
                            </span>
                            .results);
                        </code>
                    </pre>
                    <pre data-prefix=">">
                        <code className="font-mono">
                            {"}"}  <span className="font-bold dark:font-normal text-blue-400 dark:text-blue-300/80">catch</span> (error)  {"{"}
                        </code>
                    </pre>
                    <pre data-prefix=">">
                        {" "}{" "}<code className="font-mono">
                            <span className="text-teal-600 dark:text-teal-200/70">console</span>.
                            <span className="text-yellow-600 dark:text-yellow-200/90">error</span>(error);
                        </code>
                    </pre>
                    <pre data-prefix=">">
                        <code className="font-mono">
                            {"}"}
                        </code>
                    </pre>
                    <pre></pre>
                    <pre></pre>
                </div>
            </article>
        </section>
    )
}
