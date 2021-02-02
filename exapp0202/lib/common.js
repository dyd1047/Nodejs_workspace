//사용자 정의 모듈
// 1.하나의 함수를 모듈 자체로 만드는 법
// module.exports.getMsg=function(){
//     return "chok chok chok";
// }

//2.객체를 모듈로 정의
var formatter={
    getCurrency:function(){
        return 5000;
    },
    getLocale:function(){
        return "Chook";
    }
};
module.exports = formatter;