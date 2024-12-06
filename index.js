const express = require('express');
const app = express();
const URL= './models';
const Jimp = require("jimp");
const qrCode = require('qrcode-reader');
const fs = require('fs')
let port =5000;
const QRCode = require('qrcode');

//connect with mongoose




app.use(express.urlencoded({extended:false}))
app.use(express.static('public'));

app.set('view engine','ejs')


app.get('/',(req,res)=>{
    res.render('index')
})



app.post('/qrcode',  (req,res)=>{
    const url= req.body.url || 'https://example.com'
    QRCode.toFile('./public/file.png', url, {
    errorCorrectionLevel: 'H'
    }, function(err) {
    if (err) throw err;
    console.log('QR code saved!');
    res.render('scan', {qr_code:'./public/file.png'})
    });      
})

app.post('/qrcodePDF',  (req,res)=>{
    const pdf= req.body.pdf;
    QRCode.toFile('./public/file.png', pdf, {
    errorCorrectionLevel: 'H'
    }, function(err) {
    if (err) throw err;
    console.log('QR code saved!');
    res.render('pdf', {qr_code:'./public/file.png'})
    });      
})



app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})