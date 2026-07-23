import { Link } from "react-router"
import { ClerkAuthButtons } from "@/components/ClerkAuthButtons"

export default function Navbar() {
    return (
        <header className="sticky top-0 z-60 flex flex-wrap sm:flex-nowrap sm:justify-start">
            <nav className="border-b bg-background px-4 py-3 w-full hidden sm:flex basis-full flex-wrap items-center justify-between">
                <div className="max-w-340 w-full mx-auto hidden sm:flex basis-full flex-wrap items-center justify-between">
                    <div className="text-xl font-semibold text-foreground focus:opacity-80 focus:outline-hidden">
                        {" "}
                    </div>
                    <Link
                        className="inline-flex grow items-center gap-x-4 overflow-hidden text-2xl font-bold transition-all duration-300"
                        to="/"
                    >
                        <img
                            src="stackmedilogoVibrant.png"
                            alt="brandlogo"
                            className="hidden h-15 dark:block"
                        />
                        <img
                            src="stackmedilogo.png"
                            alt="brandlogo"
                            className="my-2.5 ms-1.25 block h-10 dark:hidden"
                        />
                        <span className="Pro bg-linear-to-r from-teal-900 to-emerald-400 bg-clip-text font-interphases text-3xl text-transparent dark:text-white/90">
                            StackMedic
                        </span>
                    </Link>
                    <ClerkAuthButtons />
                </div>
            </nav>

            <nav className="mx-auto flex items-center justify-center gap-x-4 px-4 py-3 font-bold sm:hidden">
                <img
                    src="stackmedilogoVibrant.png"
                    alt="brandlogo"
                    className="hidden h-20 dark:block"
                />
                <img
                    src="stackmedilogo.png"
                    alt="brandlogo"
                    className="my-2.5 ms-1.25 block h-15 dark:hidden"
                />
                <span className="Pro bg-linear-to-r from-teal-900 to-emerald-400 bg-clip-text font-interphases text-4xl text-transparent dark:text-white/90">
                    StackMedic
                </span>
            </nav>
        </header>
    )
}
