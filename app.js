//==========================
//			Dependencies
//==========================
const express	= require('express'),
		app		= express(),
		port		= 3000;


//==========================
//		  Configuration
//==========================
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/public`));


//==========================
//			   Routes
//==========================
app.get('/', function(req, res) {
	res.render('home');
});

app.get('/about', function(req, res) {
	res.render('about');
});

app.get('/contact', function(req, res) {
	res.render('contact');
});


app.get('*', function(req, res) {
	res.render('error');
});

app.listen(port, function() {
	console.log(`checkin in on ${port}.............`);
});