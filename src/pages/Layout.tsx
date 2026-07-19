import HeroSection from "@/components/HeroSection"
import Navbar from "@/components/Navbar"


export default function Layout() {
    return (
        <>
            <Navbar />
            <main className="mx-auto mt-10 flex w-full max-w-340 basis-full flex-col items-center justify-between px-4">
                <HeroSection />
            </main>
        </>
    )
}
