import {
  BetterAuth,
  convexAdapter,
  type AuthFunctions,
} from "@erquhart/convex-better-auth";
import { convex, crossDomain } from "@erquhart/convex-better-auth/plugins";
import { betterAuth } from "better-auth";
import { components, internal } from "./_generated/api";
import type { GenericCtx } from "./_generated/server";
import type { Id, DataModel } from "./_generated/dataModel";

// Typesafe way to pass the functions below into the component
const authFunctions: AuthFunctions = internal.auth;

// Initialize the component
export const betterAuthComponent = new BetterAuth(
  components.betterAuth,
  authFunctions
);

export const createAuth = (ctx: GenericCtx) =>
  // Configure your Better Auth instance here
  betterAuth({
    database: convexAdapter(ctx, betterAuthComponent),
    // Replace with your site url
    trustedOrigins: ["http://localhost:3000"],
    plugins: [
      // The Convex plugin is required
      convex(),
      // Adds support for your client and Convex backend being on separate
      // domains. Remove for Expo.
      crossDomain(),
    ],
  });

// These are required named exports
export const { createUser, updateUser, deleteUser, createSession } =
  betterAuthComponent.createAuthFunctions<DataModel>({
    // Must create a user and return the user id
    onCreateUser: async (ctx, user) => {
      const id = await ctx.db.insert("users", {});
      return id;
    },

    // Delete the user when they are deleted from Better Auth
    // You can also omit this and use Better Auth's
    // auth.api.deleteUser() function to trigger user deletion
    // from within your own user deletion logic.
    onDeleteUser: async (ctx, userId) => {
      await ctx.db.delete(userId as Id<"users">);
    },
  });
