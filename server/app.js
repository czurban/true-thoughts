import cors from "cors";
import express from "express";
const app = express();

app.use(express.json());

app.use(cors());
const thoughts = [];

app.post("/", function (req, res) {
  const { text } = req.body;
  const newThought = {
    id: Date.now(),
    text,
    createdAt: new Date().toISOString(),
  };
  thoughts.push(newThought);
  res.status(201).json(newThought);
});

app.get("/", function (req, res) {
  res.json(thoughts);
});

app.listen(3000);
