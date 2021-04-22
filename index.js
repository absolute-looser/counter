function countdown() {
  var now = new Date();
  var event = new Date(2021, 3, 23);
  var currentTime = now.getTime();
  var eventTime = event.getTime();
  var remTime = eventTime -     ;
  var remsec = Math.floor(remTime / 1000);
  var remmin = Math.floor(remsec / 60);
  var remhr = Math.floor(remmin / 60);
  var remdays = Math.floor(remhr / 24);
  remhr %= 24;
  remmin %= 60;
  remsec %= 60;
  if (remhr < 10) {
    remhr = "0" + remhr;
  }
  if (remdays < 10) {
    remdays = "0" + remdays;
  }
  if (remmin < 10) {
    remmin = "0" + remmin;
  }
  if (remsec < 10) {
    remsec = "0" + remsec;
  }
  document.getElementById("days").textContent = remdays;
  document.getElementById("Hrs").textContent = remhr;
  document.getElementById("mins").textContent = remmin;
  document.getElementById("seconds").textContent = remsec;
  if (remTime != 0) setTimeout(countdown, 1000);
  else {
    document.getElementById("first").textContent = " The Timer Has Reached";
    document.getElementById("first").style.color = "yellow";
  }
}
countdown();
