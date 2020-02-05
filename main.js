var myTextarea=document.getElementById("textme").innerHTML;
var selectSize=document.getElementById("size").innerHTML;
function sizes() {
    myTextarea.style.fontSize=selectSize.value;
}