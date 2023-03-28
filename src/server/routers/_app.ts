import { publicProcedure, router } from "../trpc";

export const appRouter = router({
    healthcheck: publicProcedure.query(() => 'fine!')
});

// Export also type router type signature,
export type AppRouter = typeof appRouter;
