var  count=0;
var l=[];
var l2=[];
var lc=["blue","green","yellow","red"];
var x=false;
$("body").on("keypress",function (){
if (!x){
    $("h1").text("level "+count);
x=true;
pl();
}})
$(".btn").on("click",function(){
let m=$(this).attr("id");
plays(m);
$("#"+m).addClass("pressed");
setTimeout(()=>{$("#"+m).removeClass("pressed");},750);
l2.push(m);
check(l2.length-1);

})

function check (x){
if (l2[x]===l[x]){
if (l2.length===l.length){
    setTimeout(()=>{pl();},1000);
    
}}
else {
plays("wrong");
$("h1").text("Game Over");
$("body").addClass("game-over");
setTimeout(()=>{$("body").removeClass("game-over");},750);
    restart();
}


}
function pl(){
    l2=[];
    count++;
$("#level-title").text("level " + count);
let i=Math.floor(Math.random()*4);
l.push(lc[i]);
$("."+lc[i]).addClass("pressed");
plays(lc[i]);
setTimeout(()=>{$("."+lc[i]).removeClass("pressed");},750);
}

function restart(){
    x=false;
    l=[];
    count=0;
}
function plays(x){
var l=new Audio("sounds/"+x+".mp3");
l.play();
}