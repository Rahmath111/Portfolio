document.addEventListener('DOMContentLoaded', () => {
  if (window.updateClock) {
    window.updateClock();
  }

  const batteryIcon = document.getElementById('battery-icon');
  if (batteryIcon) {
    batteryIcon.className = 'fa-solid fa-battery-full';
  }
});
