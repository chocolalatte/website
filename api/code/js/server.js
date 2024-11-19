const express = require('express')
const app = express()
app.use(express.json())

const fs = require("node:fs")

let listData = JSON.parse(fs.readFileSync(`../list.json`))

app.get(`/list/items`, (req, res) => {
    listData = JSON.parse(fs.readFileSync(`../list.json`))
    res.send(`Gotten data ${JSON.stringify(listData)}`)
})

app.post(`/list/items`, (req, res) => {
    const newItem = req.body
    listData.push(newItem)
    fs.writeFileSync(`../list.json`, JSON.stringify(listData))
    console.log(listData)
    res.send(`Item added: ${newItem.name}`)
})

app.put(`/list/items/:id`, (req, res) => {
    const itemId = req.params.id
    res.send(`Item with ID ${itemId} updated`)
})

app.delete(`/list/items/:id`, (req, res) => {
    const itemId = req.params.id
    res.send(`Item with ID ${itemId} deleted`)
})


const port = 3000
app.listen(port, () => console.log(`Sever running on port ${port}`))