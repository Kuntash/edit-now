import { query } from "../_generated/server";

export const getActiveUsers = query({
  handler: async (ctx) => {
    try {
      const users = await ctx.db.query("users").collect();
      return users;
    } catch (error) {
      console.log(error);
    }
  },
});
