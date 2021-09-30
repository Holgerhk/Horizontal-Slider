// querySelector = container
// funtion {setInterval = 3sec}
//if(container.style.transform.translateX !== -3435.66) {container.style.transform.translateX + 1717.83}
//else if(container.style.transform.translateX === -3435.66){container.style.transform.translateX = 0}

const container = document.querySelector(".container");
let num = -1717.83;
let idx = 0;

moveContainer();

function moveContainer() {
    setInterval(() => {
        idx++;
        if (idx !== 3) {
            container.style.transform = `translateX(${idx * num}px)`
        } else if (idx == 3) {
            idx = 0;
            container.style.transform = `translateX(0px)`;
        }
    }, 3000);
}