function Loader() {
  setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("doorway").style.display = "block";
}
setInterval(() => {
    var randomLength = 10000000000000;
    document.getElementById("randomnum1").innerHTML = Math.floor(Math.random() * randomLength);
    document.getElementById("randomnum2").innerHTML = Math.floor(Math.random() * randomLength);
    document.getElementById("randomnum3").innerHTML = Math.floor(Math.random() * randomLength);
},75)

//Loading evolve
var loadingVariant = 0
setInterval(() => {
    loadingVariant++
    
    if(loadingVariant == 0 || loadingVariant == 4){document.getElementById("loadingvariant").innerHTML = ""}
    if(loadingVariant == 1){document.getElementById("loadingvariant").innerHTML = "."}
    if(loadingVariant == 2){document.getElementById("loadingvariant").innerHTML = ".."}
    if(loadingVariant == 3){document.getElementById("loadingvariant").innerHTML = "..."}
    if(loadingVariant == 4) {loadingVariant = 0}
},500)



