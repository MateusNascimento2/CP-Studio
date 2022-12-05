const express = require('express');
const cookieParser = require('cookie-parser');
const nodemailer = require('nodemailer');


const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.post("/api/sendMail", (req, res) => {
    let name = req.body.Nome
    let email = req.body.Email
    let telephone = req.body.Telefone
    let toEmail = ["mateusnascar@hotmail.com", "mateusnascar2@gmail.com"]
    console.log(name)
    console.log(email)
    console.log(telephone)

    let smtpTransport = nodemailer.createTransport({
        host: 'mail.prcinvest.com.br',
        port: 465,
        secure: true,
        auth: {
            user: 'trabalhe.conosco@prcinvest.com.br',
            pass: 'mudar@123',
        }
    })

    let mailOptions = {
        from: email,
        to: toEmail[0],
        subject: `Mensagem de ${name} sobre aula experimental`,
        html: `<h3>Informações</h3>
                 <ul>
                 <li>Nome: ${name}</li>
                 <li>Email: ${email}</li>
                 <li>Telefone: ${telephone}</li>
                 <ul/>`,
    }

    smtpTransport.sendMail(mailOptions, (error, response) => {
        if (error){
            response.send(error)
        }
        else {
            response.send('Sucesso')
        }
    })

    smtpTransport.close();
})

const port = 3000;
app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`)
})