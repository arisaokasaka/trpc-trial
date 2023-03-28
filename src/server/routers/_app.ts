import { protectedProcedure, publicProcedure, router } from "../trpc";

export const appRouter = router({
    healthcheck: publicProcedure.query(() => 'fine!'),
    'auth-healthcheck': protectedProcedure.query(() => 'auth fine!')
});

// Export also type router type signature,
export type AppRouter = typeof appRouter;
