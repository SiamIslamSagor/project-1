import express, { NextFunction, Request, Response } from "express";
const app = express();
const port = 3000;

/* ------------------ PARSERS ----------------- */
app.use(express.json());
app.use(express.text());

const userRoute = express.Router();
const courseRoute = express.Router();

app.use("/api/v1/users", userRoute);
app.use("/api/v1/courses", courseRoute);

userRoute.post("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);
  res.json({
    success: true,
    message: "User is created successfully.",
    data: user,
  });
});

courseRoute.post("/create-course", (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);
  res.json({
    success: true,
    message: "course is created successfully.",
    data: course,
  });
});

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);

  next();
};

app.get("/", logger, (req: Request, res: Response) => {
  res.send("Hello world!");
});

app.post("/", logger, (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: "data received successfully ",
  });
});

export default app;
