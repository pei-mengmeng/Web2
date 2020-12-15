var box12=document.getElementById("box12");
var zhuce=document.getElementById("zhuce");
var close2=document.getElementById("close2");
var button2=document.getElementById("button2");
zhuce.onclick=function(){
  box12.style.display="block";
}
button2.onclick=function(){
    alert("注册成功！");
    tip3.innerHTML = "";
    tip4.innerHTML = "";
    box12.style.display="none";
}
close2.onclick=function(){
    tip3.innerHTML = "";
    tip4.innerHTML = "";
    box12.style.display="none";
}
var input3 = document.getElementById("input3");
var input4 = document.getElementById("input4");
var button2 = document.getElementById("button2");
var tip3 = document.getElementById("tip3");
var tip4 = document.getElementById("tip4");
input3.onfocus = function () {
  var text = "支持中文数字";
  tip3.innerHTML = text;
}
input3.onblur = function () {
  if (input3.value != "") {
    tip3.innerHTML = "";
  } else {
    var text = "用户名不能为空";
    tip3.innerHTML = text;
  }
}
input4.onfocus = function () {
  var text = "建议使用两种字符组合";
  tip4.innerHTML = text;
}
input4.onblur = function () {
  if (input4.value != "") {
    tip4.innerHTML = "";
  } else {
    var text = "密码不能为空";
    tip4.innerHTML = text;
  }
}
