import { router, publicProcedure } from '../trpc';
import { z } from 'zod';

export const sampleRouter = router({
  repeat: publicProcedure
    .input(
      z.object({
        count: z.number().min(1).max(50),
      }),
    )
    .output(
      z.object({
        items: z.string().array(),
      }),
    )
    .query(async ({ input }) => {
      const items = []
      for (let i = 0; i < input.count; i++) {
        items.push('1')
      }

      return { items }
    }),
  reverse: publicProcedure
    .input(
      z.object({
        text: z.string().min(1).max(100),
      }),
    )
    .query(async ({ input }) => {

      const textArray = input.text.split("")
      const reversedArray = textArray.reverse()
      const text = reversedArray.join("")

      return text
    }),
});
