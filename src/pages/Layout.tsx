import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Editor from "react-simple-code-editor/src/index"
import Prism from "prismjs"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function Layout() {
    const [rawError, setRawError] = useState("")
    const [response, setResponse] = useState("")

    const SUPPORTED_LANGUAGES = [
        { label: "Select a langauage", value: null },
        { label: "JavaScript / JSX", value: "js" },
        { label: "Python", value: "python" },
        { label: "C", value: "c" },
        { label: "C++", value: "c++" },
        { label: "Rust", value: "rust" },
        { label: "Java", value: "java" },
        { label: "Go", value: "go" },
        { label: "JSON Logs", value: "json" },
        { label: "HTML", value: "html" },
    ]
    return (
        <>
            <Navbar />
            <main className="mx-auto mt-10 flex w-full max-w-340 basis-full flex-col items-center justify-between px-4">
                <h1 className="scrol5-m-40 my-3 text-center text-4xl font-bold tracking-tight text-balance text-secondary-foreground/90">
                    Analyze your <span className="text-primary">code</span>
                </h1>

                <Select items={SUPPORTED_LANGUAGES}>
                    <SelectTrigger className="w-full max-w-50 self-start">
                        <SelectValue />
                    </SelectTrigger>

                    <SelectContent>
                        {SUPPORTED_LANGUAGES.map((lang) => (
                            <SelectItem key={lang.value} value={lang.value}>
                                {lang.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <div className="mx-5 my-10 grid h-120 w-full gap-4 lg:grid-cols-2">
                    <div className="h-150 scrollbar-none overflow-auto">
                        <Editor
                            value={rawError}
                            onValueChange={(code) => setRawError(code)} // Updates the string state
                            highlight={(code) =>
                                Prism.highlight(code, Prism.languages.js, "js")
                            }
                            padding={30}
                            placeholder="Paste your code"
                            className="order-1 min-h-full rounded-2xl border border-primary/50 bg-accent/30"
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                            }}
                        />
                    </div>

                    <div className="h-150 scrollbar-none overflow-auto">
                        <Editor
                            value={response}
                            onValueChange={(code) => setResponse(code)} // Updates the string state
                            highlight={(code) =>
                                Prism.highlight(code, Prism.languages.js, "js")
                            }
                            padding={30}
                            className="order-3 min-h-full rounded-2xl bg-primary/15 p-7.5 outline-0 lg:order-2"
                            placeholder="Response..."
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                            }}
                        />
                    </div>

                    <Button className="order-2 w-1/4 bg-linear-to-l from-primary to-emerald-500/40 lg:order-3">
                        Analyze
                    </Button>
                </div>
            </main>
        </>
    )
}
