var express = require('express');
var app = express();
//  라우터 모듈인 main.js 를 불러와서 app 에 전달
var router = require('./router/main')(app);

//  서버에서 읽을 수 있는 HTML의 위치
app.set('views', __dirname + '/views');

//  서버가 HTML렌더링을 할 때, EJS 엔진을 사용
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
});

//서버에서 읽을 수 있는 정적 파일 위치
app.use(express.static('public'));