// Lightweight auth stub to replace Clerk during UI-only mode.
// Exports client-side hooks and a server-side currentUser stub.

// Client-side hooks (used in components)
export function useClerk() {
    return {
        user: null as any,
        signOut: () => {},
    };
}

export function useAuth() {
    return {
        isSignedIn: false,
        signOut: () => {},
    };
}

export function useSignIn() {
    return {
        signIn: {
            // Simulate creating a sign-in attempt. Always succeed for UI.
            create: async (_: any) => ({ status: "complete", createdSessionId: "stub-session" }),
        },
        isLoaded: true,
        setActive: async (_: any) => {},
    };
}

export function useSignUp() {
    return {
        signUp: {
            create: async (_: any) => ({}),
            prepareEmailAddressVerification: async (_: any) => {},
            attemptEmailAddressVerification: async (_: any) => ({ status: "complete", createdSessionId: "stub-session" }),
        },
        isLoaded: true,
        setActive: async (_: any) => {},
    };
}

// Server-side stub (used in server components/actions)
export async function currentUser() {
    // Return null to indicate no signed-in user in UI-only mode.
    return null;
}

const authStub = {};

export default authStub;
