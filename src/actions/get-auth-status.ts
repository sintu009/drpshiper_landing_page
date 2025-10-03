"use server";

import { currentUser } from "@/lib/auth";

const getAuthStatus = async () => {
    const user = await currentUser();

    if (!user) {
        return { success: false, error: "User not found" };
    }

    // In UI-only mode we don't persist users. Return a lightweight success
    // payload with the user info the UI needs. Use optional chaining to be
    // defensive against partial user objects.
    return {
        success: true,
        user: {
            id: (user as any).id ?? "",
            email: (user as any)?.primaryEmailAddress?.emailAddress ?? "",
            name: (user as any)?.fullName ?? (user as any)?.firstName ?? "",
            image: (user as any)?.imageUrl ?? null,
        },
    };
};

export default getAuthStatus;
