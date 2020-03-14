const express = require('express')
const shortid = require('shortid')

const server = express()
server.use(express.json())

let users = []

server.get('/api/users', (req, res) => {
    res.status(200).json(users)
})

server.post('/api/users', (req, res) => {
    let newUser = req.body
    newUser.id = shortid.generate()
    users.push(newUser)
    res.status(201).json(newUser)
})

const PORT = 5005;
server.listen(PORT, () => console.log(`\n** Server listening on port 5005 **\n`));