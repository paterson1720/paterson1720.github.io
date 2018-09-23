function myFunction() {
    var x = document.getElementById("myTopnav");
    var y = document.getElementById("logo");
    if (x.className === "sidebar") {
        x.className += " responsive";
    } else {
        x.className = "sidebar";
    }
}