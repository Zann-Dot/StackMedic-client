import Editor from "react-simple-code-editor/src/index"
import Prism, { type Grammar } from "prismjs"
import type { LanguageValue } from "@/type/Language.type"
import type { CodeFixResponse } from "@/type/CodeFixResponse";

interface ResponseAreaProps {
    language: LanguageValue;
    codeFixResponse: CodeFixResponse | null;
    response: string
}

export default function ResponseArea({ language, codeFixResponse, response }: ResponseAreaProps) {

    return (
        <div className="h-130 scrollbar-none overflow-auto">
            <Editor
                value={response}
                onValueChange={() => { }}
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
