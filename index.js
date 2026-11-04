require('dotenv').config()
const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/sumit', (req, res) => {
    res.send('hellosumit')
})

app.get('/login', (req, res) => {
    res.send('<h1>login at sumit.com</h1>')
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})