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

app.get(
  "/",
  logger,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send(something);
    } catch (error) {
      next(error);
      // res.status(400).json({
      //   success: false,
      //   message: "failed to get data",
      // });
    }
  }
);

app.post("/", logger, (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: "data received successfully ",
  });
});

// to handle any get request what not exist?
app.all("*", (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: "Route is not found",
  });
});

/* ----------- GLOBAL ERROR HANDLER ---------- */
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong!",
    });
  }
});

export default app;
