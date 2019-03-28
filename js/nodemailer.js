"use strict";
const config = require('./configs')
const nodemailer = require("nodemailer");
// async..await is not allowed in global scope, must use a wrapper
async function sendmail(obj,callback){

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  // create reusable transporter object using the default SMTP transport
  let mailConfig = config.mail()
  let transporter = nodemailer.createTransport({
    host: mailConfig.host,
    port: mailConfig.port,
    secure: false, // true for 465, false for other ports
    auth: {
      user: mailConfig.user, // generated ethereal user
      pass: mailConfig.password // generated ethereal password
    },
    tls: {rejectUnauthorized: false}
  });

  // setup email data with unicode symbols
  let recipient_1 = "puji@padi.net.id"
  let recipient_2 = "puji@padi.net.id, pw.prayitno@gmail.com"
  let mailOptions = {
    from: '"PadiApp 👻" <puji@padi.net.id>', // sender address
    to: recipient_1, // list of receivers
    subject: obj.subject, // Subject line
    text: obj.content, // plain text body
    html: obj.content // html body
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions)

  console.log("Message sent: %s", info.messageId);
  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  callback({status:'sukses'})
}
module.exports = {
    sendmail:sendmail
}
//main().catch(console.error);