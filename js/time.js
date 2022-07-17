function update() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if(hours < 10) hours = '0' + hours;
    if(minutes < 10) minutes = '0' + minutes;
    clock.textContent = `${hours}:${minutes}`
  }
  setInterval(update,1000)