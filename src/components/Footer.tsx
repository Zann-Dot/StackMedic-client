import { Info } from "lucide-react"

export default function Footer() {
    return (
        <footer className="mx-auto w-full max-w-340 px-4 sm:px-6 lg:px-8">
            <div className="border-footer-line border-t py-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                        <p className="text-sm text-muted-foreground">
                            © 2026 — built by Anay Karn. All rights reserved.
                        </p>
                    </div>

                    <ul className="flex flex-wrap items-center">
                        <li className="before:bg-surface-3 relative inline-block pe-4 text-xs before:absolute before:inset-e-1.5 before:top-1/2 before:size-1 before:-translate-y-1/2 before:rounded-full last:pe-0 last-of-type:before:hidden">
                            <a
                                className="text-muted-foreground-1 inline-flex items-center gap-x-1 text-sm underline hover:text-teal-400"
                                href="#"
                            >
                                <Info className="h-4" />
                                About
                            </a>
                        </li>
                        <li className="before:bg-surface-3 relative inline-block pe-4 text-xs before:absolute before:inset-e-1.5 before:top-1/2 before:size-1 before:-translate-y-1/2 before:rounded-full last:pe-0 last-of-type:before:hidden">
                            <a
                                className="text-muted-foreground-1 inline-flex items-center gap-x-1 text-sm underline hover:text-teal-400"
                                href="https://github.com/Zann-Dot/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li className="inline-block pe-4 text-xs">
                            <a
                                className="text-muted-foreground-1 inline-flex items-center gap-x-1 text-sm underline hover:text-teal-400"
                                href="https://github.com/Zann-Dot/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Github
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
