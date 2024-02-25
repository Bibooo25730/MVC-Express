// controllers/uploadController.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

const uploadsPath = path.resolve(__dirname, '../uploads');

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, uploadsPath);
  },
  filename: function (req, file, callback) {
    const filename = req.headers['x-file-name'];
    callback(null, `${Date.now()}-${decodeURIComponent(filename)}`);
  }
});

const upload = multer({ storage });

router.post('/uploads', upload.single('file'), (req, res) => {
  console.log('req', req.file);
  res.json({ url: `http://localhost:3003/uploads/${req.file.filename}` });
});

module.exports = router;
