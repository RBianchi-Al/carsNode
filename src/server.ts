import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";
import { specificationsRoutes } from "./routes/specification.routes";
import { userRoutes } from "./routes/user.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationsRoutes);
app.use("/user", userRoutes);

app.listen(5555, () => console.log("Server is running 🚀"));
