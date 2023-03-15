import express from "express";

const routes = express();

routes.get("/", (req, res) => {
  return res.status(200).json({
    message: "Autherization using github",
  });
});

routes.get("*", (req, res) => {
  res.status(404).json({
    message: "Page not found, try again",
  });
});

export default routes;
