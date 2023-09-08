(function() {
    let startTime;
    let activeTime = 0;
    const activeTimeElement = document.getElementById('active-time');
  
    // Function to start tracking
    function startTracking() {
      startTime = Date.now();
    }
  
    // Function to stop tracking
    function stopTracking() {
      if (startTime) {
        activeTime += Date.now() - startTime;
        startTime = null;
      }
    }
  
    // Add event listeners for focus and blur events
    window.addEventListener('focus', startTracking);
    window.addEventListener('blur', stopTracking);
  
    // Function to update the active time every second (you can adjust the interval)
    function updateActiveTime() {
      if (startTime) {
        activeTime += Date.now() - startTime;
        startTime = Date.now();
      }
  
      // Convert activeTime to hours, minutes, and seconds
      const hours = Math.floor(activeTime / 3600000);
      const minutes = Math.floor((activeTime % 3600000) / 60000);
      const seconds = Math.floor((activeTime % 60000) / 1000);
  
      // Display active time on the page
      if (activeTimeElement) {
        activeTimeElement.textContent = `${hours}h ${minutes}m ${seconds}s`;
      }
    }
  
    // Start tracking when the page loads
    document.addEventListener('DOMContentLoaded', function() {
      startTracking();
      // Update the active time every second
      setInterval(updateActiveTime, 1000);
    });
  })();
  