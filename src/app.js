import express from "express";
import routes from "./routers";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);

const server = app.listen(PORT, console.log(`Server Listening on ${PORT} `));

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  // close server & exit process
  server.close(() => process.exit(1));
});

export default app;