const express = require('express');  
const mongoose = require('mongoose');  
const bodyParser = require('body-parser');  
const cors = require('cors');  
require('dotenv').config();  

const app = express();  
const PORT = process.env.PORT || 3000;  

// Middleware  
app.use(cors());  
app.use(bodyParser.json());  

// MongoDB bağlantısı  
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })  
    .then(() => console.log('MongoDB’ye bağlandı'))  
    .catch(err => console.log('MongoDB bağlantı hatası:', err));  

// Kullanıcı şeması oluşturma  
const userSchema = new mongoose.Schema({  
    tcNo: { type: String, required: true, unique: true },  
    target: { type: String, required: true }  
});  

const User = mongoose.model('User', userSchema);  

// Kullanıcı kaydı  
app.post('/register', async (req, res) => {  
    const { tcNo, target } = req.body;  
    const user = new User({ tcNo, target });  

    try {  
        await user.save();  
        res.status(201).send({ message: 'Kayıt başarılı' });  
    } catch (error) {  
        res.status(400).send({ error: 'Kayıt sırasında bir hata oluştu' });  
    }  
});  

// Kullanıcı girişi  
app.post('/login', async (req, res) => {  
    const { tcNo } = req.body;  

    try {  
        const user = await User.findOne({ tcNo });  
        if (user) {  
            res.send({ target: user.target });  
        } else {  
            res.status(404).send({ error: 'Kullanıcı bulunamadı' });  
        }  
    } catch (error) {  
        res.status(500).send({ error: 'Giriş sırasında bir hata oluştu' });  
    }  
});  

// Sunucuyu başlatma  
app.listen(PORT, () => {  
    console.log(`Sunucu ${PORT} portunda çalışıyor`);  
});