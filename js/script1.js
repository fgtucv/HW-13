let messegNumber = 0;

const interval = setInterval(() => {
    messegNumber = messegNumber + 1;
    if(messegNumber >= 5){
        alert(`Це останє ${messegNumber} повідомлення`);
        
        clearInterval(interval);
        
        return;
    }

    alert(`Це ${messegNumber} повідомлення`);
}, 3000)