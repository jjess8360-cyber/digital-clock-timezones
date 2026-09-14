function updateClock(id, timeZone) {
  const now = new Date();

  const time = now.toLocaleTimeString("en-US", {
    timeZone: timeZone,
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
  });

  document.getElementById(id).textContent = time;
}

function updateAllClocks() {
  updateClock("new-york", "America/New_York");
  updateClock("los-angeles", "America/Los_Angeles");
  updateClock("london", "Europe/London");
  updateClock("tokyo", "Asia/Tokyo");
}

updateAllClocks();
setInterval(updateAllClocks, 1000);
