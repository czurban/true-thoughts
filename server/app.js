import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*"); // или "https://true-thoughts-jwbs-omega.vercel.app"
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization",
  );

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  next();
});

app.use(express.json());

const thoughtSchema = new mongoose.Schema({
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

thoughtSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

const Thought =
  mongoose.models.Thought || mongoose.model("Thought", thoughtSchema);

let isConnected = false;
const connectToDatabase = async () => {
  if (isConnected && mongoose.connection.readyState === 1) return;
  await mongoose.connect(process.env.MONGO_URI);
  isConnected = true;
};

app.use(async (req, res, next) => {
  try {
    await connectToDatabase();
    next();
  } catch (err) {
    console.error("Database connection error:", err);
    res.status(500).json({ error: "Failed to connect to database" });
  }
});

const getThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find().sort({ createdAt: -1 });
    res.json(thoughts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createThought = async (req, res) => {
  try {
    const { text } = req.body;
    const newThought = await Thought.create({ text });
    res.status(201).json(newThought);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteThought = async (req, res) => {
  try {
    const { id } = req.params;
    await Thought.findByIdAndDelete(id);
    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

app.get("/", getThoughts);
app.get("/thoughts", getThoughts);

app.post("/", createThought);
app.post("/thoughts", createThought);

app.delete("/:id", deleteThought);
app.delete("/thoughts/:id", deleteThought);

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export default app;
