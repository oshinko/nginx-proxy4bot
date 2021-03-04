const express = require('express')

const PORT = 8080
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => res.send(`
<!DOCTYPE html>
<html>
<head>
<meta name="description" content="This page is for bots.">
<title>Index</title>
</head>
<body>
Hello, bot!
</body>
</html>
`.trim()))

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
