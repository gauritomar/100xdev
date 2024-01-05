function updateClock() {
    const now = new Date();
    const date = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear().toString();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const currentTime = `${date}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    return currentTime;
}

function updateTerminal() {
    console.clear();
    console.log(updateClock());
}

setInterval(updateTerminal, 1000);
