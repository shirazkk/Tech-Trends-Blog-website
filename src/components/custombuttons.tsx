import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function CustomClerkButtons() {
  return (
    <div>
      <ClerkProvider>
        <SignedOut>
          <div className="flex space-x-2">
            <SignInButton>
              <Button
                variant="outline"
                className="mx-1 dark:text-white dark:border-white dark:hover:text-blue-400"
              >
                Login
              </Button>
            </SignInButton>

            <SignUpButton mode="modal">
              <Button
                variant="outline"
                className="mx-1 dark:text-white dark:border-white dark:hover:text-blue-400"
              >
                Signup
              </Button>
            </SignUpButton>
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton
           afterSwitchSessionUrl="/"
            appearance={{
              elements: {
                userButtonTrigger:
                  "mx-1 dark:text-white dark:border-white dark:hover:text-blue-400",
              },
            }}
          />
        </SignedIn>
      </ClerkProvider>
    </div>
  );
}
