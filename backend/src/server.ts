import app from "./app.js";

const PORT = 5000;

const server = app.listen(PORT, "127.0.0.1", () => {
  console.log(`EMTA API running at http://127.0.0.1:${PORT}`);
});

server.on("error", (error) => {
  console.error("SERVER ERROR:", error);
});