const express = require("express");
const app = express();
const PORT = 3000;
const userRouter = require("./routes/user");

// app.use(express.static("public"));
// app.use(myLogger);
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // console.log("hello express");
  // res.send("hello express");
  // res.status(500).json({ message: "Internal Server Error" });
  res.render("index", { text: "Express" });
});

// ルーティング
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
