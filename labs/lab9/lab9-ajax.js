(function () {
    "use strict";
    let text;
    let options;

    let onChangeHandler = function () {
        let fileName = options.value;
        let filePath = `files/${fileName}`;
        fetch(filePath).then(val => val.text())
            .then(data => text.value = data)
    }
    window.onload = function () {
        options = document.getElementById("options");
        text = document.getElementById("text");
        options.onchange = onChangeHandler;
         
    }
})();