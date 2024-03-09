const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const allowedFileTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (!allowedFileTypes.includes(file.mimetype)) {
      cb(new Error("This filetype is not supported")); // cb(error)
      return;
    }
    // if (file.size > 1000000) {
    //   cb(new Error("File size exceeds the limit of 1MB"));
    //   return;
    // }
    cb(null, "./storage"); // --> cb(error,success)
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // 1MB in bytes
});

module.exports = {
  storage,
  multer,
};
