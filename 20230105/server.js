// install한 npm 모듈 사용
const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;

// html에서 request를 받기 위한 cors 사용
// 매개변수를 비워두면 모든 요청에 대해 허용
app.use(cors());

// 앱 객체의 리슨 함수
app.listen(port, () => {
    console.log('listening on 8080');
});

// get 방식
app.get('/pet', (req, res) => {
    res.send('Pet Site');
});

app.get('/beauty', (req, res) => {
    res.send('beauty Site');
});

// html 파일 응답 방식
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/write', (req, res) => {
    res.sendFile(__dirname + '/write.html');
});

// 파라미터로 url 받기
app.get('/:id', (req, res) => {
    const { id } = req.params;

    if(id == "dog"){
        res.json({'sound': '멍멍'});
    } else if(id == "cat"){
        res.json({'sound': '야옹'});
    } else if(id == "pig"){
        res.json({'sound': '꿀꿀'});
    } else {
        res.json({'sound': '알수없음'});
    }
});