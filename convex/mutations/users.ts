import { v } from "convex/values";
import { mutation } from "../_generated/server";

// Create user
export const createUser = mutation({
  args: {
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const users = await ctx.db.query("users").collect();
    if (users.length > 10) return null;
    const newUserId = await ctx.db.insert("users", {
      name: args.name,
      last_seen_online: Date.now(),
    });
    return newUserId;
  },
});

export const updateLastSeenOnline = mutation({
  args: {
    id: v.id("users"),
  },
  handler: async (ctx, args) => {
    try {
      await ctx.db.patch(args.id, {
        last_seen_online: Date.now(),
      });
    } catch (error) {
      console.log(error);
    }
  },
});

export const deleteInActiveUsers = mutation({
  handler: async (ctx) => {
    const inActiveUsers = await ctx.db
      .query("users")
      .filter((q) => {
        return q.gte(q.sub(Date.now(), q.field("last_seen_online")), 60000);
      })
      .collect();
    inActiveUsers.forEach((inActiveUser) => {
      ctx.db.delete(inActiveUser._id);
    });
  },
});
