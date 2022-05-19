import express from "express";
import { router as userRouter } from "./routes";

const app = express();

app.use(express.json());

app.use("/api", userRouter);

export default app;
