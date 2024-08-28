const size = document.querySelector(".size-animation");
const position = document.querySelector(".position-animation");
const radius = document.querySelector(".radius-animation");

size.addEventListener("click", startSizeInterval);

function startSizeInterval() {
    const sizeInterval = setInterval(() => {
        const randomSize = Math.random() * (500 - 100) + 100;
    
        size.style.width = randomSize + "px";
        size.style.height = randomSize + "px";
    }, 3000);

    size.removeEventListener("click", startSizeInterval);
    size.addEventListener("click", stopSizeInterval);

    function stopSizeInterval() {
        clearInterval(sizeInterval);

        return;
    }
}

position.addEventListener("click", startPositionInterval);

function startPositionInterval() {
    const positionInterval = setInterval(() => {
        const x = Math.random() * (100 - 0) + 0;
        const y = Math.random() * (100 - 0) + 0;
    
       position.style.transform = `translate(${x}%, ${y}%)`;
    }, 3000)
    
    position.removeEventListener("click", startPositionInterval);
    position.addEventListener("click", stopPositionInterval);

    function stopPositionInterval() {
        clearInterval(positionInterval);

        return;
    }
}

radius.addEventListener("click", startRadiusInterval);

function startRadiusInterval() {
    const radiusInterval = setInterval(() => {
        const randomRadius = Math.random() * (50 - 0) + 0;
    
       radius.style.borderRadius = `${randomRadius}%`;
    }, 3000)
    
    radius.removeEventListener("click", startRadiusInterval);
    radius.addEventListener("click", stopRadiusInterval);

    function stopRadiusInterval() {
        clearInterval(radiusInterval);

        return;
    }
}