import express, { Request, Response } from "express";
const app = express();
const port = 3000;

/* ------------------ PARSERS ----------------- */
app.use(express.json());
app.use(express.text());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!");
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: "data received successfully ",
  });
});

export default app;
