var controller = require('../controllers/controller');

module.exports = function(app) {

	app.get('/', function (req, res) {
		res.sendfile("./views/index.html");
	});
	
	app.use(function(req, res){
	   res.sendfile("./views/index.html");
	});
}