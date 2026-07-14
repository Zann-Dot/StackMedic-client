import React from "react"
import Editor from "react-simple-code-editor/src"
import Prism, { type Grammar } from "prismjs"
import type { LanguageValue } from "@/type/Language.type"
interface CodeEditorAreaProps {
    language: LanguageValue;
    rawError: string;
    setRawError: React.Dispatch<React.SetStateAction<string>>
}

export default function CodeEditorArea({ language, rawError, setRawError }: CodeEditorAreaProps) {


    return (
        <div className="h-130 scrollbar-none overflow-auto">
            <Editor
                value={rawError}
                onValueChange={(code) => setRawError(code)}
                highlight={(code) => {
                    if (language) {
                        const grammar: Grammar = Prism.languages[language]
                        return Prism.highlight(code, grammar, language)
                    }
                }}
                padding={30}
                placeholder="Paste your code"
                className="order-1 min-h-full rounded-2xl border border-primary/50 bg-accent/30"
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                }}
            />
        </div>
    )
}
