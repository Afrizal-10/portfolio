// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Koneksi MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/portfolio", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// Schema Testimoni
const TestimoniSchema = new mongoose.Schema(
  {
    name: String,
    message: String,
  },
  {timestamps: true}
);

const Testimoni = mongoose.model("Testimoni", TestimoniSchema);

// API get testimoni
app.get("/api/testimoni", async (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  const data = await Testimoni.find().sort({createdAt: -1}).limit(limit);
  res.json(data);
});

// API tambah testimoni
app.post("/api/testimoni", async (req, res) => {
  const {name, message} = req.body;
  const newTestimoni = new Testimoni({name, message});
  await newTestimoni.save();
  res.json({success: true});
});

// Jalankan server di port 5000
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
