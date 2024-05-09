const express = require('express')
const mailer = require('nodemailer')

const app = express()

app.listen(3000, () => {
  console.log("App escuchando puerto 3000")
})

const transporter = mailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASS
  }
})

app.get("/", async (req, res) => {
  // opciones correo
  const mailOptions = {
    from: 'Nuestra aplicación <devmaumus@gmail.com>',
    to: 'mauriciofb@gmail.com',
    subject: 'Mensaje desde nuestra app 👁️👁️',
    text: 'Cuerpo del correo'
  }

  const message = await transporter.sendMail(mailOptions)
  console.log(message)
  res.send("Mensaje enviado " + JSON.stringify(message))
})
