import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import type { Language, LanguageValue } from "@/type/Language.type"
import CodeEditorArea from "@/components/CodeEditorArea"
import ResponseArea from "@/components/ResponseArea"
import type { CodeFixResponse } from "@/type/CodeFixResponse"

export default function Layout() {
    const [language, setLanguage] = useState<LanguageValue>("js")
    const [rawError, setRawError] = useState("")
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState("")
    const [codeFixResponse, setCodeFixResponse] =
        useState<CodeFixResponse | null>(null)

    const SUPPORTED_LANGUAGES: Language[] = [
        { label: "JavaScript / JSX", value: "js" },
        { label: "Python", value: "python" },
        { label: "C", value: "c" },
        { label: "C++", value: "cpp" },
        { label: "Rust", value: "rust" },
        { label: "Java", value: "java" },
        { label: "Go", value: "go" },
        { label: "JSON Logs", value: "json" },
        { label: "HTML", value: "html" },
    ]

    async function getAIResponse() {
        try {
            setLoading(true)
            const response: Response = await fetch("/api/error-log-analytics", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ rawError }),
            })
            const data = await response.json()
            if (!response.ok) throw new Error(data.error)
            setCodeFixResponse(data)
            setResponse(data.codeFix)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Navbar />
            <main className="mx-auto mt-10 flex w-full max-w-340 basis-full flex-col items-center justify-between px-4">
                <h1 className="scrol5-m-40 my-3 text-center text-4xl font-bold tracking-tight text-balance text-secondary-foreground/90">
                    Analyze your <span className="text-primary">code</span>
                </h1>

                <Select
                    items={SUPPORTED_LANGUAGES}
                    onValueChange={(value: LanguageValue) => setLanguage(value)}
                >
                    <SelectTrigger className="w-full max-w-50 self-start">
                        <SelectValue placeholder="JavaScript / JSX" />
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
                    <CodeEditorArea
                        language={language}
                        rawError={rawError}
                        setRawError={setRawError}
                    />

                    <ResponseArea
                        language={language}
                        response={response}
                        codeFixResponse={codeFixResponse}
                        loading={loading}
                    />

                    <Button
                        onClick={getAIResponse}
                        className="order-2 w-1/4 bg-linear-to-l from-primary to-emerald-500/40 lg:order-3"
                    >
                        Analyze
                    </Button>
                </div>
            </main>
        </>
    )
}
