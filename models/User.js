const mongoose = require('mongoose');

const userSchema = mongoose.Schema({ //DB를 받을때 각각의 법,규격,
    name: { 
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique:1
    },
    password: {
        type:String,
        minlength: 5
    },
    lastname: {
        type : String,
        maxlength: 50
    },
    role: {
        type: Number,
        default:0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: { //토큰 사용할수 있는 기한
        type:Number
    }
})
const User = mongoose.model('User',userSchema)  //스키마를 감싼다 (model) 스키마의 감싸고 이름 지정

module.exports = {User} //모듈을 다른데서도 쓸쑤있게 익스포트