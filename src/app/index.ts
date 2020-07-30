import express from "express";
import bodyParser from "body-parser";
import { PaymentRouter } from "./routes";
import { isAuth } from "./middleware/isAuth";

const app: express.Application = express();
app.use(bodyParser.json());
app.use(isAuth);
app.use("/payment", PaymentRouter);

export default app;
