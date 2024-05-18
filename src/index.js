const multer = require("multer");
const path = require("path");

const multerConfig = {
  storage: multer.diskStorage({
    destination: "./uploads",
    filename: function (req, file, callback) {
      const randomName = Array(32)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join("");
      callback(null, `${randomName}${path.extname(file.originalname)}`);
    },
  }),
};

module.exports = { multerConfig };
