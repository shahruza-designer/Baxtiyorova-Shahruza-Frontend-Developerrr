javascript
function updateTime() {
    const now = new Date();

    document.getElementById("time").innerHTML =
        "Hozirgi vaqt: " + now.toLocaleTimeString();
}

setInterval(updateTime, 1000);
updateTime();

function showMessage() {
    alert("Portfolio saytga tashrif buyurganingiz uchun rahmat!");
}

