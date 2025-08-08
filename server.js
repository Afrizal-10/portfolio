import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://your-frontend-domain.com"],
  })
);

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

const TestimoniSchema = new mongoose.Schema(
  {
    name: String,
    message: String,
  },
  {timestamps: true}
);

const Testimoni = mongoose.model("Testimoni", TestimoniSchema);

app.get("/api/testimoni", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const data = await Testimoni.find().sort({createdAt: -1}).limit(limit);
    res.json(data);
  } catch (err) {
    console.error("Error getting testimoni:", err);
    res.status(500).json({error: "Server error"});
  }
});

app.post("/api/testimoni", async (req, res) => {
  try {
    const {name, message} = req.body;
    if (!name || !message)
      return res.status(400).json({error: "Name and message required"});

    const newTestimoni = new Testimoni({name, message});
    await newTestimoni.save();
    res.json({success: true});
  } catch (err) {
    console.error("Error saving testimoni:", err);
    res.status(500).json({error: "Server error"});
  }
});

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
