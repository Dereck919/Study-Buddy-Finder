import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";
const PORT = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname);

const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 404;

  app.get("/route", (req, res) => {
    try {
      // ill fill later; get new listings
      res.send("GET");
    } catch (error) {
      res.status(500).send("GET request failed");
    }
  });

  app.post("/route", (req, res) => {
    try {
      const data = req.body;
      // ill fill later; post a new listing
      res.send("POST ");
    } catch (error) {
      res.status(500).send("POST request failed");
    }
  });

  app.delete("/route/:id", (req, res) => {
    try {
      const id = req.params.id;
      // ill fill later; delete the listing
      res.send(`DELETE request success for ID: ${id}`);
    } catch (error) {
      res.status(500).send("DELETE request failed");
    }
  });

  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
