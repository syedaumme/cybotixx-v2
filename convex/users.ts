import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createUser = mutation({
  args: {
    fullName: v.string(),
    registerNumber: v.string(),
    courseName: v.string(),
    courseYear: v.string(),
    phoneNumber: v.string(),
    clerkId: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await ctx.db.insert("users", {
      fullName: args.fullName,
      registerNumber: args.registerNumber,
      courseName: args.courseName,
      courseYear: args.courseYear,
      phoneNumber: args.phoneNumber,
      clerkId: args.clerkId,
    });

    return userId;
  },
});
