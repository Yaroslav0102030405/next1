import { SignInButton, SignOutButton, SignedOut, SignedIn} from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

const Navigation = () => {
    return ( <><nav className="bg-[var(--background)] border-b border-[var(--foreground)]/10">
        <div className="max-w-7x1 mx-auto px-4 sm:px-6  lg:px-8">
            <div className="flex justify-between h-16 items-center">
                <div className="flex-shrink-0">
                    <h1 className="text-tl font-semibold text-[var(--foreground)]">Мій додаток на Next</h1>
                    </div>
                    <div className="flex items-center gap-4">
                       <SignedOut>
                       <SignInButton mode="modal">
                        <button className="bg-orange-600 py-2 px-4">Увійти</button>
                        </SignInButton>
                        </SignedOut>
                        <SignedIn>
                        <UserButton />
                         <SignOutButton>
                            <button className="bg-orange-600 py-2 px-4">Вийти</button>
                        </SignOutButton>
                        </SignedIn>
                    </div>
                    </div>
        </div>
    </nav></> );
}
 
export default Navigation;