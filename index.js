var express = require('express'),
	mailer = require('express-mailer');;

var app = express();
mailer.extend(app, {
  from: 'no-reply@example.com',
  host: 'smtp.gmail.com',
  secureConnection: true, 
  port: 465, 
  transportMethod: 'SMTP', 
  auth: {
    user: 'bella.vita.diamonds@gmail.com',
    pass: 'Rick&Jose'
  }
});

//view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.static('public'));

app.get('/send-mail', function (req, res, next) {
  app.mailer.send('email', {
    to: 'emilio.rodriguez@gmail.com',
    subject: 'Test Email', 
    otherProperty: 'Other Property'
  }, function (err) {
    if (err) {
      // handle error 
      console.log(err);
      res.send('There was an error sending the email');
      return;
    }
    res.send('Email Sent');
  });
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});