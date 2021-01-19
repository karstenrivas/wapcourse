window.onload = function () {
    let btn = document.getElementById("bigger");
    let text = document.getElementById("text");
    let bling = document.getElementById("bling");
    btn.onclick = function () {
        setInterval(() => {
            text.style.fontSize = parseInt(text.style.fontSize == ""? 12: text.style.fontSize) + 2 +"pt";
        }, 500);
     
    };
    bling.onchange = function () {
        if (bling.checked) {
            text.style.fontWeight = "bold";   
            text.style.textDecoration = "underline";
            text.style.color = "green";
        }
            
        else {
            text.style.fontWeight = "normal";   
            text.style.textDecoration = "none";
            text.style.color = "black";
        }
    };
}