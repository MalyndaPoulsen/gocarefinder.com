// "use strict";
// var express = require('express');
// var app = express();
// var bp = require('body-parser');
// var nodemailer = require('nodemailer');
// var mg = require('nodemailer-mailgun-transport');

// // This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails)
// var auth = {
// 	auth: {
// 		api_key: 'key-b37588cc3966af777e25c55991b7fe4e',
// 		domain: 'gocarefinder.com'
// 	}
// }

// var nodemailerMailgun = nodemailer.createTransport(mg(auth));

// app.use(bp.json())
// app.use(bp.urlencoded({ extended: true }))

// app.use(express.static(__dirname + '/public'))

// app.post('/send', function (req, res) {
// 	console.log(req.body.email)
// 	nodemailerMailgun.sendMail({
// 		from: `${req.body.email}`,
// 		to: 'kellyjeanyoung@msn.com',
// 		subject: 'Hello from goCareFinder',
// 		text: req.body.message,
// 		'h:Reply-To': 'kelly@gocarefinder.com',
// 	}, function (err, info) {
// 		if (err) {
// 			console.log('Error: ' + err);
// 		}
// 		else {
// 			console.log('Response: ' + info);
// 			res.send(info);
// 		}
// 	});
// })


// app.listen(process.env.PORT || 3000)