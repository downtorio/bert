//==========================
//			Dependencies
//==========================
const express	= require('express'),
		app		= express(),
		port		= 3000;


//==========================
//		  Configuration
//==========================


//==========================
//			   Routes
//==========================
app.get('/', function(req, res) {
	res.send('Testing 123');
});

app.listen(port, function() {
	console.log(`checkin in on ${port}.............`);
});