 var box11=document.getElementById("box11");
var close=document.getElementById("close");
var login=document.getElementById("login");
var button1=document.getElementById("button1");
login.onclick=function(){
    box11.style.display="block";
}
close.onclick=function(){
    box11.style.display="none";
    tip2.innerHTML = "";
    tip1.innerHTML = "";
}
button1.onclick=function(){
  box11.style.display="none";
  tip2.innerHTML = "";
    tip1.innerHTML = "";
  alert("登录成功！");
}
 var input1 = document.getElementById("input1");
  var input2 = document.getElementById("input2");
  var button = document.getElementById("button");
  var tip1 = document.getElementById("tip1");
  var tip2 = document.getElementById("tip2");
  input1.onfocus = function () {
    var text = "支持中文数字";
    tip1.innerHTML = text;
  }
  input1.onblur = function () {
    if (input1.value != "") {
      tip1.innerHTML = "";
    } else {
      var text = "用户名不能为空";
      tip1.innerHTML = text;
    }
  }
  input2.onfocus = function () {
    var text = "建议使用两种字符组合";
    tip2.innerHTML = text;
  }
  input2.onblur = function () {
    if (input2.value != "") {
      tip2.innerHTML = "";
    } else {
      var text = "密码不能为空";
      tip2.innerHTML = text;
    }
  }