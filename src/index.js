const app = require('./app')
const User = require('./models/user')

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
})