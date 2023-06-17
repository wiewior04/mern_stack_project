const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const app = express();
const bcrypt = require('bcryptjs');

const salt = 'sagsdaogawj253154';

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://blog:V8zS3dy5NndSXPKm@cluster0.qufmn6d.mongodb.net/?retryWrites=true&w=majority');

app.post('/register', async (req,res) => {
    const {username,password} = req.body;
    try {
        const userDoc = await User.create({
            username,
            password:bcrypt.hashSync(password,salt),
        });
        res.json(userDoc);
    }  catch(e) {
        res.status(400).json(e);
    }
});

app.listen(4000)

