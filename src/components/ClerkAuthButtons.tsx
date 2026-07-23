import { useAuth } from "@clerk/react-router"
import { Button } from "@/components/ui/button"
import { SignInButton, SignUpButton, UserButton } from "@clerk/react-router"
import { NavLink } from "react-router";

export function ClerkAuthButtons() {
    const { isSignedIn } = useAuth();

    return (
        <div className="flex items-center gap-2">
            {!isSignedIn ? (
                <>
                    <SignInButton mode="modal">
                        <Button
                            variant="ghost"
                            className="flex items-center rounded-lg bg-transparent text-sm text-foreground hover:bg-primary-foreground dark:hover:bg-background"
                        >
                            Login
                        </Button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                        <Button className="rounded-lg bg-teal-600 font-semibold hover:bg-teal-600/80">
                            Get Started
                        </Button>
                    </SignUpButton>
                </>
            ) : (
                <div className="flex items-center gap-5">
                    <NavLink to="/analysis" className="rounded-lg transition-all duration-300 hover:bg-linear-to-l text-white dark:border-0 dark:hover:opacity-90 py-1.5 px-5 text-sm bg-neutral border dark:bg-linear-to-l from-primary to-emerald-500/40">
                        Analyze
                    </NavLink>
                    <UserButton />
                </div>
            )}
        </div>
    )
}
