window.onscroll = function() {
	myFunction()
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
function getParameter(name) {
   var url = window.location.href;
   var paramsStart = url.indexOf("?");

   if(paramsStart != -1){

      var paramString = url.substr(paramsStart + 1);
      var tokenStart = paramString.indexOf(name);

      if(tokenStart != -1){

         paramToEnd = paramString.substr(tokenStart + name.length + 1);
         var delimiterPos = paramToEnd.indexOf("&");

         if(delimiterPos == -1){
            return paramToEnd;
         }
         else {
            return paramToEnd.substr(0, delimiterPos);
         }
      }
   }
}

function getParameters() {

   var params = new Array();
   var url = window.location.href;
   var paramsStart = url.indexOf("?");
   var hasMoreParams = true;

   if(paramsStart != -1){

     var paramString = url.substr(paramsStart + 1);
     var params = paramString.split("&");
     for(var i = 0 ; i < params.length ; i++) {

       var pairArray = params[i].split("=");

       if(pairArray.length == 2){
         params[pairArray[0]] = pairArray[1];
       }

     }
     return params;
   }
   return null;
}
