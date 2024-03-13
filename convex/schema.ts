import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  documents: defineTable({
    body: v.string(),
  }),
  users: defineTable({
    name: v.string(),
  }),
});
