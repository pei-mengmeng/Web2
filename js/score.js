var pic = document.getElementById("pic");
var picList = pic.getElementsByTagName("img");
var txt = document.getElementById("txt");
var comments = ["差", "一般", "中等", "还行", "好"];
var pingjia=document.getElementById("pingjia");
var wrap1=document.getElementById("wrap1");
var close1=document.getElementById("close1");
var flag = true;
var btn=document.getElementById("btn");
pingjia.onclick=function(){
    wrap1.style.display="block";
}
close1.onclick=function(){
    wrap1.style.display="none";
}
for(var i = 0; i < picList.length; i++) {
    picList[i].onmouseover = function() {
        if(!flag) {
            return;
        }
        var index = this.getAttribute("title");
        var imgSrc = "";
        if(index <= 2) {
            imgSrc = "./images/star1.png";
        }
        else {
            imgSrc = "./images/star2.png";
        }            
        for(var j = 0; j < index; j++) {
            picList[j].src = imgSrc;
        }
        txt.innerHTML = comments[index - 1];
    }
    picList[i].onmouseout = function() {
        if(!flag) {
            return;
        }
        for(var j = 0; j < picList.length; j++) {
            picList[j].src = "./images/star0.png";
        }
        txt.innerHTML = "";
    }
    picList[i].onclick = function() {
        flag = !flag;
    }
}
btn.onclick=function(){
    alert("感谢您的评价(*￣︶￣)");
}