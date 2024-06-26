const express = require('express')

const app = express()
const PORT = 3000 || process.env.PORT

const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => console.log(`App is live on port ${PORT}`))