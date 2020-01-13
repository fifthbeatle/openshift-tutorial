const express = require('express')

const app = express()

const html = `<h1>Node.js</h1>
              <p>Deploying Node.js to Open Shift</p>`

app.get('/', (req, res) => {
  res.send(html)
})

app.listen(8080, () => {
  console.log('Server is running...')
})