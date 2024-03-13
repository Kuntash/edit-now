import { query } from "../_generated/server";

export const getDocument = query({
  handler: async (ctx) => {
    try {
      const document = (await ctx.db.query("documents").collect())?.[0];
      return document;
    } catch (error) {}
    return null;
  },
});
