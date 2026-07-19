import FeatureSection from "@/components/FeatureSection"
import HeroSection from "@/components/HeroSection"
import HowItWorksSection from "@/components/HowItWorksSection"
import Navbar from "@/components/Navbar"
import Testimonials from "@/components/Testimonials"


export default function Layout() {
    return (
        <>
            <Navbar />
            <main className="mt-10 flex basis-full flex-col items-center gap-y-10 w-full">
                <HeroSection />
                <FeatureSection />
                <HowItWorksSection />
                <Testimonials />
            </main>
        </>
    )
}
