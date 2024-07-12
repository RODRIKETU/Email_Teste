const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
     port: 587,
     secure: false,
     auth: {
         user: "aporttec_log@outlook.com",
         pass: "30Mariafn@"
     }

});
transporter.sendMail({
    from: "Teste de email <aporttec_log@outlook.com>",
    to: "rodriketu@gmail.com,rodrigo@digmidia.com",
    subject: "teste de envio de email <aporttec_log@outlook.com",
    html: "testando envio de email ..."
}).then(message =>{
    console.log(message);
}).catch(err =>{
    console.log(err);
});