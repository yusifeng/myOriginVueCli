let express = require('express')

let app = express()

app.use('/', express.static('dist'))

// app.use()
app.listen(8081, () => {
    console.log('服务器已经开启')
})