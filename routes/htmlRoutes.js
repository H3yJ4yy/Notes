const router = require('express').Router();
const path = require('path');

// route for homepage
router.get('/', (req, res) => 
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

// route for notes page
router.get('/notes', (req, res) => 
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

module.exports = router;