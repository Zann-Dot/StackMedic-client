import Editor from "react-simple-code-editor/src/index"
import Prism, { type Grammar } from "prismjs"
import { useState } from "react"
import type { LanguageValue } from "@/type/Language.type"

interface ResponseAreaProps {
    language: LanguageValue
}

export default function ResponseArea({ language }: ResponseAreaProps) {
    const [response, setResponse] = useState("");

    return (
        <div className="h-130 scrollbar-none overflow-auto">
            <Editor
                value={response}
                onValueChange={(code) => setResponse(code)}
                highlight={(code) => {
                    if (language) {
                        const grammar: Grammar = Prism.languages[language]
                        return Prism.highlight(code, grammar, language)
                    }
                }}
                padding={30}
                className="order-3 min-h-full rounded-2xl bg-primary/15 p-7.5 outline-0 lg:order-2"
                placeholder="Response..."
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                }}
            />
        </div>
    )
}
