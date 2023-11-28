const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const fileName = './db/db.json'

router.get('/notes', (req, res) => {
    const data = fs.readFileSync(fileName, utf8);
    const parseData = JSON.parse(data)
    // console.log(data);
    res.status(200).json(parseData);
} )

router.post("/notes", (req, res) => {
    const { title, text} = req.body;
    const myNote = {
        title, 
        text, 
        id: uuidv4()
    }
    const newNote = [...fileName, myNote];
    const data = fs.writeFileSync('db/db.json', JSON.stringify(newNote), (err) => console.log(err));
    res.json(data);

})

module.exports = router;