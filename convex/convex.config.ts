import { defineApp } from "convex/server";
import betterAuth from "@erquhart/convex-better-auth/convex.config";

const app = defineApp();
app.use(betterAuth);

export default app;
