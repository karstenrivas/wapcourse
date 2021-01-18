window.onload = function () {
    let min = document.getElementById("min");
    let sec = document.getElementById("sec");
    let btn = document.getElementById("go");
    btn.onclick=() => {
      let intervalId=   setInterval(function () {
          if (sec.value> 0) {
                sec.value = sec.value - 1;
          } else if (min.value > 0) {
                sec.value = 59;
                min.value = min.value - 1;
            }
            else {
                clearInterval(intervalId);
                document.body.style.backgroundColor = 'red';
                setTimeout(() => {
                    document.body.style.backgroundColor = 'white';
                }, 2000);
            }

        }, 1000);
    };
}

