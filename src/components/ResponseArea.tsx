import Editor from "react-simple-code-editor/src/index"
import Prism, { type Grammar } from "prismjs"
import type { LanguageValue } from "@/type/Language.type"
import type { CodeFixResponse } from "@/type/CodeFixResponse"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { Marker, MarkerContent, MarkerIcon } from "./ui/marker"
import { Spinner } from "./ui/spinner"

interface ResponseAreaProps {
    language: LanguageValue
    codeFixResponse: CodeFixResponse | null
    response: string
    loading: boolean
}

export default function ResponseArea({
    language,
    codeFixResponse,
    response,
    loading,
}: ResponseAreaProps) {
    return (
        <div className="h-130 scrollbar-none overflow-auto">
            {(loading || codeFixResponse) && (
                <div className="my-4 flex items-center">
                    <div className="max-w-40">
                        <DotLottieReact
                            src="https://lottie.host/5af24568-4225-421f-a8bb-5b6ff04f9125/MOspDght3B.lottie"
                            loop
                            autoplay
                            width={96}
                            height={96}
                            className="w-30"
                        />
                    </div>

                    {!loading ? (
                        <section className="col-start-2 col-end-5">
                            <div className="text-foreground">
                                <span className="font-bold text-teal-300">Explanation: </span>
                                {codeFixResponse?.explanation}
                            </div>
                            <div className="font-bold text-teal-300">
                                <span className="font-normal text-red-500">Error Type: </span>
                                {codeFixResponse?.errorType}
                            </div>
                        </section>
                    ) : (
                        <Marker role="status" >
                            <MarkerIcon>
                                <Spinner />
                            </MarkerIcon>
                            <MarkerContent className="shimmer shimmer-color-teal-300 shimmer-duration-1100">Analyzing...</MarkerContent>
                        </Marker>
                    )}
                </div>
            )}

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
