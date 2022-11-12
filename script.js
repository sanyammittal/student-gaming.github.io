var a = document.getElementById("navigation");
var b = document.getElementById("onetime");
var c = document.getElementById("monthly");


function nav() {
    a.style.height = "60vh";
}

function hidenav() {
    a.style.height = "0vh";
}

function onetime() {
    b.style.backgroundColor = "#41a2d8";
    c.style.backgroundColor = "white";
    c.style.color = "black";
    b.style.color = "white";
}

function monthly() {
    c.style.backgroundColor = "#41a2d8";
    b.style.backgroundColor = "white";
    c.style.color = "white";
    b.style.color = "black";
}

function amount1() {
    if (document.getElementById("box-1").style.border == "1px solid gray") {
        document.getElementById("box-1").style.border = "2px solid #41a2d8";
        document.getElementById("p1").style.color = "#41a2d8";
        document.getElementById("box-2").style.border = "1px solid gray";
        document.getElementById("p2").style.color = "gray";
        document.getElementById("box-3").style.border = "1px solid gray";
        document.getElementById("p3").style.color = "gray";
        document.getElementById("customamount").style.border = "1px solid gray";
        document.getElementById("customamount").style.color = "gray";
        document.getElementById("i2").style.color = "gray";
    }
    else {
        document.getElementById("box-1").style.border = "1px solid gray";
        document.getElementById("p1").style.color = "gray";
    }
}

function amount2() {
    if (document.getElementById("box-2").style.border == "1px solid gray") {
        document.getElementById("box-2").style.border = "2px solid #41a2d8";
        document.getElementById("p2").style.color = "#41a2d8";
        document.getElementById("box-1").style.border = "1px solid gray";
        document.getElementById("p1").style.color = "gray";
        document.getElementById("box-3").style.border = "1px solid gray";
        document.getElementById("p3").style.color = "gray";
        document.getElementById("customamount").style.border = "1px solid gray";
        document.getElementById("customamount").style.color = "gray";
        document.getElementById("i2").style.color = "gray";
    }
    else {
        document.getElementById("box-2").style.border = "1px solid gray";
        document.getElementById("p2").style.color = "gray";
    }
}

function amount3() {
    if (document.getElementById("box-3").style.border == "1px solid gray") {
        document.getElementById("box-3").style.border = "2px solid #41a2d8";
        document.getElementById("p3").style.color = "#41a2d8";
        document.getElementById("box-2").style.border = "1px solid gray";
        document.getElementById("p2").style.color = "gray";
        document.getElementById("box-1").style.border = "1px solid gray";
        document.getElementById("p1").style.color = "gray";
        document.getElementById("customamount").style.border = "1px solid gray";
        document.getElementById("customamount").style.color = "gray";
        document.getElementById("i2").style.color = "gray";
    }
    else {
        document.getElementById("box-3").style.border = "1px solid gray";
        document.getElementById("p3").style.color = "gray";
    }
}

function amount4() {
    document.getElementById("customamount").style.border = "2px solid #41a2d8";
    document.getElementById("customamount").style.color = "#41a2d8";
    document.getElementById("i2").style.color = "#41a2d8";
    document.getElementById("box-3").style.border = "1px solid gray";
    document.getElementById("p3").style.color = "gray";
    document.getElementById("box-2").style.border = "1px solid gray";
    document.getElementById("p2").style.color = "gray";
    document.getElementById("box-1").style.border = "1px solid gray";
    document.getElementById("p1").style.color = "gray";
}