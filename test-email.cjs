const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.naver.com',
  port: 465,
  secure: true,
  auth: {
    user: 'leeshc0@naver.com',
    pass: '3P8B73TZMX6L'
  }
});

const mailOptions = {
  from: 'leeshc0@naver.com',
  to: 'leeshc0@naver.com',
  subject: 'Test',
  text: 'Test message',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
