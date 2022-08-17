const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: "email-ssl.com.br",
     port: 587,
     secure: false,
     auth: {
         user: "nfep4@pomardelivery.com.br",
         pass: "pomar01112009"
     }

});
transporter.sendMail({
    from: "Nfe<nfep4@pomardelivery.com.br>",
    to: "rodrigo@aporttec.com",
    subject: "teste",
    html: "ola teste ok"
}).then(message =>{
    console.log(message);
}).catch(err =>{
    console.log(err);
});