var pics =[
    "imgs/cat.jpg",
    "imgs/cat1.jpg",
    "imgs/cat2.jpg",
]

var btn = document.querySelector("button");
var img = document.querySelector("img");
var cnt=1;
btn.addEventListener("click", function(){
    if(cnt===3){
        cnt=0;
    }
    img.src=pics[cnt]
    cnt=cnt+1;


});
