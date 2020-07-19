/**
 * http://usejsdoc.org/
 */
var express = require('express');
var app = express();
var io = require('socket.io').listen(8080);
io.set('heartbeat timeout', 600000);


var information;
var SchoolID;
var Status;

// 라우터 모듈인 main.js 를 불러와서 app 에 전달
// 서버에서 읽을 수 있는 HTML의 위치
app.set('views', __dirname + '/views');

// 서버가 HTML렌더링을 할 때, EJS 엔진을 사용
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.get('/', (req, res) => {
	  res.render('index.ejs');
});

var server = app.listen(10001, function(){
	console.log("Start ...")
});


io.on('connection', function (socket) {
	console.log('connect');
    var instanceId = socket.id;
    
    socket.on('joinRoom', (id, status) => {
    	socket.join(id.information);
        information = id.information;
        SchoolID = id;
        Status = status;
        console.log(SchoolID + ', ' + Status);
        io.sockets.emit('reqMsg', SchoolID, Status);
        
    });
    
});

// 서버에서 읽을 수 있는 정적 파일 위치
app.use(express.static('public'));