var a = document.getElementById("Live");
var button= document.getElementById("Normal");

button.onclick= function(){

if(Live.className=="open"){
    Live.className="";
    Easy.className="";
    Hard.className="";
    button.innerHTML="Normal Mode ";
} else {
    Live.className="open";
    Easy.className="open";
    Hard.className="open";
    button.innerHTML="Show Live mode";

  
    
}
};
