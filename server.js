const path = require('path')

const express = require('express')
const app = express()

const bodyParser = require('body-parser')

const metadata = require('./metadata')
const api = require('./api')

app.use(bodyParser.json())
app.use('/static', express.static(path.resolve('dist')))

metadata.createMetadata(app)
api.createApi(app)

app.get('/**', (req, res) => {
    return res
        .header('Content-Type', 'text/html')
        .type('text/html')
        .send(`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>wargochi</title>
                    <link href="https://fonts.googleapis.com/css?family=Roboto+Mono" rel="stylesheet">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                </head>
                <body>
                    <div id="react-root"></div>
                    <script src="/static/main.js"></script>
                </body>
            </html>
        `)
})


const port = 9000
app.listen(port, () => console.log(`Listening on ${port}`))