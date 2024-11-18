const express = require('express')
const app = express()
app.use(express.json())

const fs = require("node:fs")


app.get(`/api/items`, (req, res) => {
    fs.readFile(`../list.json`, (err, data) => {
        const listData = JSON.parse(data)
        res.send(listData)
    })
})

app.post(`/api/items`, (req, res) => {
    const newItem = req.body
    console.log(newItem)
    res.send(`Item added: ${newItem.name}`)
})

app.put(`/api/items/:id`, (req, res) => {
    const itemId = req.params.id
    res.send(`Item with ID ${itemId} updated`)
})

app.delete(`/api/items/:id`, (req, res) => {
    const itemId = req.params.id
    res.send(`Item with ID ${itemId} deleted`)
})


const port = 3000
app.listen(port, () => console.log(`Sever running on port ${port}`))