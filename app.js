function setTime() {
  const hour = document.querySelector('#hour');
  const min = document.querySelector("#min");
  const second = document.querySelector("#second");
  const now = new Date();

  const getHour = now.getHours();
  const getMin = now.getMinutes();
  const getSecond = now.getSeconds();

  hour.innerText = getHour;
  min.innerText = getMin;
  second.innerText = getSecond;
}

setInterval(setTime, 1000);
