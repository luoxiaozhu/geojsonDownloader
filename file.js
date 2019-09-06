var request = require("request");
var fs = require("fs");
const mainUrl = "https://geo.datav.aliyun.com/areas/bound/";

for(var i = 0;i<=18;i++){
	var dataUrl = mainUrl+(340000+i*100)+"_full.json";
	var name = (340000+i*100).toString();
	console.log(dataUrl);
	var options = {
		url: dataUrl,
		//json:true,
		headers: {
			//'Content-type': 'application/json',
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'
		}
	};
	(function(opt,name){
		request(opt, function (error, response, body) {
			console.log('error:', error); // Print the error if one occurred
			if(error)return;
			if(body){	
				fs.writeFile(name+".json",body,function(err){
					if (err) {
						return console.error(err);
					}
				});
			}		
		})
	})(options,name);
	
}
