function creategridart(){

    // If the old table is in place, remove it
    if (document.contains(document.getElementById("prova"))){
        document.getElementById("prova").remove();
    }
    var thecolor = document.getElementById("color").value;

    // Inputs and variables
    var h = parseInt(document.getElementById("height").value);
    var w = parseInt(document.getElementById("width").value);
    var buttonDiv = document.getElementById("clearColor");
    var tablediv = document.getElementById("tablediv");
    var table = document.createElement("table");
    table.setAttribute("id", "prova");

    // Creating columns and rows (or height and width)
    for (let i = 1; i <= h; i++) {
        var colonna = document.createElement("tr");
        table.appendChild(colonna);
        for (let j = 1; j <= w; j++) {
            var riga = document.createElement("td");
            riga.setAttribute("id", (++numid));// Ogni td (riga)avrà un numero (numid) crescente per poi colorarlo
            colonna.appendChild(riga);
        }
        // Appending table
        tablediv.appendChild(table);
    }

    // Creating the clearcolor button and its function
    var buttonDiv = document.getElementById("clearColor");
    var clearButton = document.createElement("div");

    // Creating the clear-color function
    clearColor.onclick = function(){
        if (document.body.contains(riga)){
            var alltd = document.querySelectorAll("table td"); // queryselectAll create an array of td's
        for (let i = 0; i < alltd.length; i++){
            alltd[i].style.backgroundColor = "#ffffff";
            }
        }
    }
    // Fill all the table with the current color in the palette section
    fillColor.onclick = function(){
        if (document.body.contains(riga)){
            var thecolor = document.getElementById("color").value;
            var alltd = document.querySelectorAll("table td"); // queryselectAll create an array of td's
            for (let i = 0; i < alltd.length; i++){
                alltd[i].style.backgroundColor = thecolor;
            }
        }
    }
    // Toggle grid function (show/hide grid)
    toggleGrid.onclick = function(){
        var alltd = document.querySelectorAll("table td"); // queryselectAll create an array of td's
            for (let i = 0; i < alltd.length; i++){
                alltd[i].classList.toggle("gridonoff");
            }
            table.classList.toggle("gridonoff");
    }
    // Function to create the "last 10 colors used" section
    var table1 = document.createElement("table");
    let lastdiv = document.getElementById("lastdiv");
        table1.setAttribute("id", "prova1");
}

    var td1 = document.getElementById("td1");
    var td2 = document.getElementById("td2");
    var td3 = document.getElementById("td3");
    var td4 = document.getElementById("td4");
    var td5 = document.getElementById("td5");
    var td6 = document.getElementById("td6");
    var td7 = document.getElementById("td7");
    var td8 = document.getElementById("td8");
    var td9 = document.getElementById("td9");
    var td10 = document.getElementById("td10");
    var arr = [td1, td2, td3, td4, td5, td6, td7, td8, td9, td10];
    var color = document.getElementById("color");

    color.onchange = function(){
        for (let a = 0; a <= 0; a++){
        var thecolor = document.getElementById("color").value;
        arr[0].style.backgroundColor = thecolor;
        arr[0].classList.toggle("appearButtons");
        var lasttext = document.getElementById("LastColorUsedText");
        lasttext.classList.add("visible");
        arr.push(arr.shift(arr[0]));
        }
    }
    function rgbToHex(col){
    if(col.charAt(0)=='r'){
        col=col.replace('rgb(','').replace(')','').split(',');
        var r=parseInt(col[0], 10).toString(16);
        var g=parseInt(col[1], 10).toString(16);
        var b=parseInt(col[2], 10).toString(16);
        r=r.length==1?'0'+r:r; g=g.length==1?'0'+g:g; b=b.length==1?'0'+b:b;
        var colHex='#'+r+g+b;
        return colHex;
    }
    }
    function takecolor(x){
        var currentid = document.getElementById(x);
        var rgbBackGround = currentid.style.backgroundColor;
        document.getElementById("color").value = rgbToHex(rgbBackGround);
    }
function colorz(){
    let ciccio = document.getElementById("color").value;

     array_onchange_color.unshift(ciccio);
}

var numid = 0;
let array_onchange_color = [];
var array = [];
var array1 = [];
var array_last_color = array[array.length - 1];

// COLORING THE TABLE WITH MOUSE1 + CREATING A TABLE WITH LAST COLOR USED
// Function to get the ID of each element clicked on the page
// If the element clicked is not a number = do nothing, if is a number = change color with the color in palette

function getid(e){

    e = e || window.event;
    e = e.target || e.srcElement;
    var thecolor = document.getElementById("color").value;
    var lastdiv = document.getElementById("lastdiv");
    numberofe = parseInt(e.id);
    var table1 = document.createElement("table");
    table1.setAttribute("id", "prova1");

    //////////////////////////////////////////////////////////
    if ((Number.isInteger(numberofe))){
            e.style.backgroundColor = thecolor;

           if (array.indexOf(thecolor)== -1){ // check if the current color is already inside the array of "last colors used"
                array.push(thecolor);
            }
    }
}

// Function to cancel color by right click (prevent also contextmenu from appearing in the page)
window.oncontextmenu = function (e) {
    e = e || window.event;
    e = e.target || e.srcElement;
    if (e.style.backgroundColor =! null){
        e.style.backgroundColor = "#ffffff";
    }
    return false;
}
















