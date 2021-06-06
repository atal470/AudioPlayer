
var x=document.querySelectorAll(".krum").length;
for (var i=0;i<x;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var buttonhtml;
        buttonhtml=this.innerHTML
        makesound(buttonhtml)

    });
}

function makesound(key){
    switch (key) {
        case "Meant to Be":
            var audio1= new Audio("sound/M.mp3");
            audio1.play();
            break;
        case "Mia":
            var audio2= new Audio("sound/B.mp3");
            audio2.play();
            break;
        case "Sunflower":
            var audio3= new Audio("sound/P.mp3");
            audio3.play();
            break;
        case "Sober":
            var audio4= new Audio("sound/G.mp3");
            audio4.play();
            break;
               
    
        default:console.log(buttonhtml);
            
    }
      
}
let song = [
    {
      
      path: "sound/M.mp3"
     },
    {
      
        path: "sound/B.mp3"
       },
      {
      
        path: "sound/P.mp3"
       },
      {
      
        path: "sound/G.mp3"
      }
    ]


