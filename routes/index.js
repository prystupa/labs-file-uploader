
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

function sleep(count) {
	for (var i = 0; i < count; i++) {
		// console.log(i);
	}
}

exports.upload = function(req, res){

	req.on('data', function(){
		sleep(200000000);
	});

	req.on('end', function(){
		res.json({"success": true});
	});
};