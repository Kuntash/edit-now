import { v } from "convex/values";
import { mutation } from "../_generated/server";

export const updateDocument = mutation({
  args: {
    body: v.string(),
    id: v.id("documents"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.patch(args.id, {
      body: args.body,
    });
  },
});
