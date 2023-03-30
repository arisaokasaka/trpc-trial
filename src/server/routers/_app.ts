import { protectedProcedure, publicProcedure, router } from "../trpc";
import { sampleRouter } from "./sample";

export const appRouter = router({
    healthcheck: publicProcedure.query(() => 'fine!'),
    'auth-healthcheck': protectedProcedure.query(() => 'auth fine!'),
    sample: sampleRouter
});

// Export also type router type signature,
export type AppRouter = typeof appRouter;
