require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

const app = express();
app.use(express.json());
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://vidya-nest-5htt.vercel.app'
  ],
  methods: ['GET', 'POST', 'PUT'],
  credentials: true
}));

const port = process.env.PORT || 5000;

const uri = process.env.MongoDb_url || 
  "mongodb+srv://appUser:prudhu123@vidyanestcluster.4ahxhfd.mongodb.net/VidyaNestDB?retryWrites=true&w=majority&appName=VidyaNestCluster";

mongoose.connect(uri)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, trim: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  phoneno: { type: String },
  college: { type: String },
  year: {
    startedYear: { type: Number },
    passedOutYear: { type: Number }
  }
});

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare password method
userSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("User", userSchema);

const ContactSchema = new mongoose.Schema({
  email: String,
  name: String,
  number: String,
  subject: String,
  message: String,
});
const Contact = mongoose.model("Contact", ContactSchema);

const LoginSchema = new mongoose.Schema({
  username: String,
  email: String,
  loginTime: { type: Date, default: Date.now }
});
const Login = mongoose.model("Login", LoginSchema);

// Register
app.post("/api/register", async (req, res) => {
  try {
    const { email } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Save new user
    const newUser = new User(req.body);
    await newUser.save();

    res.status(201).json({ message: "Registration successful" });
  } catch (err) {
    // Handle MongoDB duplicate error (if you used unique: true in schema)
    if (err.code === 11000) {
      return res.status(409).json({ message: "User already exists" });
    }

    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


// Login
app.post("/api/login", async (req, res) => {
  try {
    const { username, password, role } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // save login record
    const loginRecord = new Login({ username: user.username, email: user.email });
    await loginRecord.save();

    // ✅ Generate JWT
    const token = jwt.sign(
      { id: user._id, username: user.username, role: role || "student" },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    // ✅ Send token to frontend
    res.json({
      message: "Login successful",
      token,
      user: {
        username: user.username,
        email: user.email,
        phoneno: user.phoneno,
        college: user.college,
        year: user.year
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



app.post("/api/contact", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).send("Contact saved!");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.all('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error('❌ Global Error:', err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
