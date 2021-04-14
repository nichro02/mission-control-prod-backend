const express = require('express')
const app = express()
const cors = require('cors')
//const methodOverride = require('method-override')

//middleware
app.use(express.urlencoded({ extended: false }))
app.use(cors())
//update/delete routes
//app.use(methodOverride('_method'))


//stub out home route
app.get('/', (req, res) => {
    res.send('HELLO WORLD')
})

//Route prefixes
app.use('/auth', require('./routes/auth.js'))

const port = 8800

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})

//module.exports = server