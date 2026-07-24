const express = require('express');

const app = express();
app.use(express.json()) // Middleware express

const qwerty = []

app.post('/qwerty', (req, res) => {
    qwerty.push(req.body)

    res.status(201).json({
        message: "note created successfully"
    })
})

// GET qwerty
app.get('/qwerty', (req, res) => {
    res.status(200).json({
        message: "notes fetched successfully",
        notes: qwerty        
    })
})

app.delete('/qwerty/:index', (req, res) => {
    const indDel = req.params.index

    delete qwerty[ indDel ]

    res.status(200).json({
        message:"note deleted successfully"
    })

})

// PATCH 
app.patch('/qwerty/:index', (req, res) => {
    const indupdate = req.params.index
    const description = req.body.description
    const title = req.body.title
     
    qwerty[ indupdate ].description = description 
    qwerty[ indupdate ].title = title 

    res.status(200).json({
        message: "note updated successfully"
    })
})

module.exports = app;
