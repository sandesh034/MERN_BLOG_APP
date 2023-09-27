const multer = require('multer');
const path = require('path');

// Define a function to check if the file is an image
const imgpath=path.join(__dirname,'../uploads')

const isImage = (file) => {
  const allowedMimes = ['image/jpeg', 'image/png','image/jpg', 'image/gif'];
  return allowedMimes.includes(file.mimetype);
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, `${imgpath}`);
  },
  filename: function (req, file, cb) {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (isImage(file)) {
      cb(null, true); // Accept the file
    } else {
      cb(new Error('Only image files are allowed.'), false); // Reject the file
    }
  },
});
const uploadImage = (req, res) => {
    if (req.file) {
      res.send("Image uploaded successfully.");
    }
  };

module.exports={uploadImage,upload}

