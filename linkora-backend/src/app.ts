import cookieParser from "cookie-parser";
import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import config from "./config";
import { userRoutes } from "./modules/users/user.route";
import { authRoutes } from "./modules/auth/auth.route";
import { postRoute } from "./modules/post/post.route";
import { commentRoutes } from "./modules/comment/comment.route";
import { notFound } from "./middleware/notFound";
import { globalErrorHandler } from "./middleware/globalErrorHandler";
import { subscriptionRoute } from "./modules/subscription/subscription.route";
import { premiumRoutes } from "./modules/premium/premium.route";
const app: Application = express();
app.use(
  cors({
    origin: config.app_url,
    //it will be work in cokkie
    credentials: true,
  }),
);


//..The webhook should be placed before expres.json()
//don't need subscriptionRoute it automatic wil be go subscriptionRoute
app.use("/api/subscription/webhook",express.raw({ type: "application/json" }))

app.use(express.json());
//This middleware keeps client data in req.body.
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.get("/", async (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoute);
app.use("/api/comments", commentRoutes);
app.use("/api/subscription", subscriptionRoute);
app.use("/api/premium", premiumRoutes)

//If api is not found then give me globall error
app.use(notFound);

app.use(globalErrorHandler);
export default app;
