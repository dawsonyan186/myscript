var fs = require('fs');
//从命令行获取传入的文件夹名称
var dirName = process.argv[2];
//创建目录
function mkdir(dirName){
	if (!fs.existsSync(dirName)){
		fs.mkdirSync(dirName);
		return 0;
	}else{
		console.log('error: dir exists');
		return 1;
	}
}
//写文件
function writeFile(fileName,content){
	fs.writeFile(fileName, content, function(err) {
		if(err) {
			return console.log(err);
		}
	});
}

var errcode = mkdir(dirName);
if(!errcode){
	process.chdir(dirName);
	writeFile("index.html", "<!DOCTYPE>\n<title>Hello</title>\n<h1>Hi</h1>");
	mkdir('css');
	writeFile("css/style.css", "h1{color: red;}");
	mkdir('js');
	writeFile("js/main.js", "var string = \"Hello World\"\nalert(string)");
}
