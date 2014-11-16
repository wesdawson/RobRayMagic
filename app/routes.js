// app/routes.js

	module.exports = function(app, express, path) {


		// frontend routes =========================================================
		// route to handle all angular requests
		app.get('*', function(req, res) {
			res.sendfile('./public/views/index.html'); // load our public/index.html file
		});

		// Routes from amjorgen
		app.use('/public/css', express.static(path.join(__dirname, '/public/css')));
		app.use('/public/fonts', express.static(path.join(__dirname, '/public/fonts')));
		app.use('/public/img', express.static(path.join(__dirname, '/public/img')));
		app.use('/public/js', express.static(path.join(__dirname, '/public/js')));
	};

