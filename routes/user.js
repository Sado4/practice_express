const express = require("express");
const router = express.Router();

// router.use(myLogger);

// ミドルウェア
function myLogger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

router.get("/", myLogger, (req, res) => {
  res.status(200).json({ message: "ユーザーです" });
});
router.get("/info", (req, res) => {
  res.status(200).json({ message: "ユーザー情報です" });
});
router.get("/:id", (req, res) => {
  res.status(200).json({ message: `ユーザーIDは${req.params.id}です` });
});

module.exports = router;
