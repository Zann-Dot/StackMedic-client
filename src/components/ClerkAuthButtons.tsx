import { useAuth } from "@clerk/react-router"
import { Button } from "@/components/ui/button"
import { SignInButton, SignUpButton, UserButton } from "@clerk/react-router"

export function ClerkAuthButtons() {
    const { isSignedIn } = useAuth()

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
                <UserButton />
            )}
        </div>
    )
}
