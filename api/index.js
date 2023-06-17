const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/register', (req,res) => {
    const {username,password} = req.body;
    res.json({requestData:{username,password}})
});

app.listen(4000)

//ShWF3gZp5lsgqE2S
//mongodb+srv://blog:<password>@cluster0.qufmn6d.mongodb.net/?retryWrites=true&w=majority