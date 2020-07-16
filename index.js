const express = require('express') //익스프레스 모듈을 요청한다
const app = express() //express function을 이용해 앱 변수에 넣어줌
const port = 5000 //포트 번호

const mongoose = require('mongoose') //몽고db를 편하게 조작할수있는 툴 몽구스 설치해야함
mongoose.connect('mongodb+srv://sijin:q1634250@boilerplate.zx3sh.mongodb.net/<dbname>?retryWrites=true&w=majority'
,{
    useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true, 
    useFindAndModify: false
}).then( () => console.log('MongDb connected...'))
.catch(err => console.log(err)) //몽고 db랑 연결  
app.get('/', (req, res) => res.send("hello wo")) //app에 루트 부분에 헬로우 월드를 출력

app.listen(port, () => console.log(`example app listenung on port ${port}!`)) // app.포트 5000번에 실행