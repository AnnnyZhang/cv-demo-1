let demo = document.querySelector('#demo');
let style = document.querySelector('#style');
let n = 1;
let div1Width = '400px';
let innerWidth = '200px';
if (navigator.userAgent.match(/(iPhone|Android.*Mobile)/) || navigator.userAgent.match(/MSIE [6,7,8,9]/)) {
    div1Width = '150px';
    innerWidth = '75px';
  }
let str = `
/*HI，大家好，我叫AnnnyZhang
接下来我来演示以下我的前端功底
首先我准备了一个div
请看好我要给这个div添加样式了
*/
#div1{
    border: 1px solid tomato;
    width: `+ div1Width +`;
    height: `+ div1Width +`;
}
/*
 *看我把div变成八卦 
 *首先将div变成一个圆
 **/
#div1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border:none;
}
/*
 *八卦是阴阳形成的
 *一黑一白
 **/
#div1 {
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(9,9,121,1) 50%, rgba(0,0,0,1) 50%);
}
#div1::before{
    width: `+ innerWidth +`;
    height: `+ innerWidth +`;
    background-color: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(9,9,121,1) 25%, rgba(0,0,0,1) 25%);
}
#div1::after {
    width: `+ innerWidth +`;
    height: `+ innerWidth +`;
    background-color: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(9,9,121,1) 25%, rgba(255,255,255,1) 25%);    
}
`;

let tmp = '';
let step = ()=>{
    setTimeout(() => {
        n < str.length - 1 ? step() : null;
        str[n] === '\n' ? tmp +='<br />' : tmp +=str[n];
        str[n] === ' ' ? tmp +='&nbsp;' : null;
        demo.innerHTML = tmp;
        style.innerHTML = str.substring(0, n);
        n++;
    },10);
    window.scrollTo(0,document.body.scrollHeight);
}
step();