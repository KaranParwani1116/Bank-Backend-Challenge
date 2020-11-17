const multer = require('multer')

const upload = multer({dest: 'bank_statement_csv/'})

const uploadStatement = (req, res) => {
    console.log(`new upload = ${req.file.filename}\n`)
    console.log(req.file)
    res.send({
        message: 'Upload works'
    })
}

module.exports = {
    uploadStatement
}