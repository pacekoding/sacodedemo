const express = require('express')
const app = express()
const port = 3000


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

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/members', (req, res) => {
    let json = getDataFromDB()
    res.json(json)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})