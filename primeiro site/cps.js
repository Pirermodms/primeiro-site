var cps = 0;
var clicks = 0;
var ms = 0;
var started = false;
var timeLeft = 10;
var interval;
var canRestart = true; // Controla se o jogo pode ser iniciado novamente

function startGame() {
    if (!canRestart || started) return; // Impede reinício imediato
    started = true;
    canRestart = false; // Bloqueia novo jogo até o tempo passar
    clicks = 0;
    ms = 0;
    timeLeft = 10;
    document.getElementById("cps").innerHTML = "Clique o máximo que puder!";
    document.getElementById("timer").innerHTML = timeLeft;

    interval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            document.getElementById("timer").innerHTML = timeLeft;
        } else {
            clearInterval(interval);
            cps = Math.round(clicks / 10);
            document.getElementById("cps").innerHTML = "Seu CPS: " + cps;
            started = false;

            // Aguarda 3 segundos antes de permitir reinício
            setTimeout(() => {
                canRestart = true;
            }, 3000);
        }
    }, 1000);
}

window.onclick = function () {
    if (!started) {
        startGame();
        return;
    }
    clicks++;
};



