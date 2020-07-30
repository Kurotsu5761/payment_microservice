import express from "express";

const PAYMENT_SERVICE_SECRET = "verysecretiveindeed";

export const isAuth = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.sendStatus(401);
  const token = authHeader.split(" ")[1];
  if (token !== PAYMENT_SERVICE_SECRET) return res.sendStatus(401);
  next();
};
