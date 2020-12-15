  var title = document.getElementsByClassName("title");
  title[0].style.marginLeft = "0px";
  var intervalId = setInterval(function () {
    var marginLeft = parseInt(title[0].style.marginLeft);
    if (marginLeft == 800) {
      title[0].style.marginLeft = "0";
      marginLeft = "0";
    }
    title[0].style.marginLeft = (marginLeft + 1) + "px";
  }, 50)
  

