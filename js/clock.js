function updateClock() {
  const now = new Date();
  const hour = String(now.getHours()).padStart(2, '0');
  const minute = String(now.getMinutes()).padStart(2, '0');
  const dayName = now.toLocaleDateString('en', { weekday: 'long' });
  const shortDate = now.toLocaleDateString('en', { month: 'short', day: 'numeric' });

  const timeEl = document.getElementById('time');
  const weekdayEl = document.getElementById('weekday');
  const dateEl = document.getElementById('date-label');

  if (timeEl) timeEl.textContent = `${hour}:${minute}`;
  if (weekdayEl) weekdayEl.textContent = dayName;
  if (dateEl) dateEl.textContent = shortDate;
}

updateClock();
setInterval(updateClock, 1000);
window.updateClock = updateClock;