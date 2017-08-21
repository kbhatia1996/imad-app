console.log('Loaded!');
var img =document.getElementById('k1');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft +50;
    img.style.marginLeft=marginLeft + "px";
}
img.onClick=function(){
    var interval= setInterval(moveRight,50);
};