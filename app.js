const hash = window.location.hash.replace("#/", "").trim();

if(hash){

    document.getElementById("loading").innerHTML =
        "Sedang mengalihkan...";

    setTimeout(function(){

        window.location.href =
        "https://yagami-cell.com/test_game_inject/test_pln/"+hash;

    },500);

}
