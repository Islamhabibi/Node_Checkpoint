var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'islem.habibi93@gmail.com',
      pass: 'yourpassword'
    }
  });
  //contenu de mail
  var mailOptions = {
    from: 'islem.habibi93@gmail.com',
    to: 'islam.habibi93@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'Hello from Node.js This is a test email sent using Node.js'
  };
  //envoyer le mail
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });