const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');

const dbConfig = require('./database.config.js')
const Member = require('./member.model.js');

const app = express()
const port = 3000

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    // Create a Note
    

    res.send('Sacode Weekend!')
})

app.get('/api/members', (req, res) => {
    let json = getDataFromDB()
    res.status(200).json(json)
})

app.post('/api/members/new', (req, res) => {
    const member = new Member({
        id: "1",
        name: "Nana",
        age: "22 Tahun" 
    });

    // Save Note in the database
    member.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        })
    })

    res.status(200)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

function getDataFromDB() {
    return {
        data: {
            members: [
                {
                    id: "1",
                    name: "Dana",
                    joinDate: "16 Oktorber 2021",
                },
                {
                    id: "2",
                    name: "Dana",
                    joinDate: "16 Oktorber 2021",
                },
                {
                    id: "3",
                    name: "Dana",
                    joinDate: "16 Oktorber 2021",
                },
                {
                    id: "4",
                    name: "Dana",
                    joinDate: "16 Oktorber 2021"
                },
                {
                    id: "5",
                    name: "Dana",
                    joinDate: "16 Oktorber 2021"
                },
                {
                    id: "6",
                    name: "Dana",
                    joinDate: "16 Oktorber 2021"
                },
                {
                    id: "7",
                    name: "Dana",
                    joinDate: "16 Oktorber 2021"
                }
            ]
        }
    }
}