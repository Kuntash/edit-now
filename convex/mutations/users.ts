import { v } from "convex/values";
import { mutation } from "../_generated/server";

// Create user
export const createUser = mutation({
  args: {
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const newUserId = await ctx.db.insert("users", { name: args.name });
    return newUserId;
  },
});

export const deleteUser = mutation({
  args: {
    id: v.id("users"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.delete(args.id);
  },
});
