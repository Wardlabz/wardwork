const express = require('express');
const cors = require('cors');

const app = express();
const port = 4001;

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("💼 WARDWORK backend is up and running!");
});

app.listen(port, () => {
  console.log(`🚀 WARDWORK server is live at http://localhost:${port}`);
  console.log("🌐 Connecting freelancers and clients around the world...");
  console.log("✅ Working...");
});
