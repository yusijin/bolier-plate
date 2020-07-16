const express = require('express') //익스프레스 모듈을 요청한다
const app = express() //express function을 이용해 앱 변수에 넣어줌
const port = 5000 //포트 번호
const bodyParser = require('body-parser');
const { User } =require("./models/User"); //User.js에서 export(방출)한 User 객체를 가져옴 {}으로 표시
const config = require("./config/key");

//application/x-www.form-urlencoded  이렇게 된 데이터를 분석해서 가져올수있게
app.use(bodyParser.urlencoded({extended: true})); 

//appliction/json 타입으로 된것을 분석해서 가져 올수 있게 두줄을 넣음
app.use(bodyParser.json());


const mongoose = require('mongoose') //몽고db를 편하게 조작할수있는 툴 몽구스 설치해야함
mongoose.connect(config.mongoURI
,{
    useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true, 
    useFindAndModify: false
}).then( () => console.log('MongDb connected...'))
.catch(err => console.log(err)) //몽고 db랑 연결  



app.get('/', (req, res) => res.send("hello wo 새복받")) //(라우터이다)app에 루트 부분에 헬로우 월드를 출력

app.post('/register', (req, res) => {
    //회원 가입 할때 필요한 정보들을 clien에서 가져오면
    //그것들을 데이터베이스에 넣어준다.

     const user = new User(req.body) //User 객체를 user인스턴스에 넣음
     console.log(user)

     user.save((err, userInfo) => {
         if(err) return res.json({success: false, err})
         return res.status(200).json({
             success:true
         })
     }) //몽고 db 메소드
})
app.listen(port, () => console.log(`example app listenung on port ${port}!`)) // app.포트 5000번에 실행