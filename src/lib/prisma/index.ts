// Lightweight stubbed `db` for UI-only mode.
// This prevents creating a real Prisma client / DB connection while keeping
// the rest of the app able to import `db` safely.

type AnyObject = Record<string, any>;

export const db = {
    // Only the methods used by the UI are stubbed here.
    user: {
        // Returns null to indicate "no existing user" by default.
        findFirst: async (_query?: AnyObject) => {
            return null;
        },
        // No-op create that returns a minimal object.
        create: async (_data?: AnyObject) => {
            return { id: "stub-user", ...(_data ?? {}) };
        },
    },
} as const;
