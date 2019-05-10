const express = require('express')
const app = express()

app.get('*', (req, res) => res.json({succeed:true,errorCode:'0000000',errorMessage:'',data:{}}))

app.listen(19000, () => console.log('Example app listening on port 19000!'))
