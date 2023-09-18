(function() {
  let startTime;
  let activeTime = 0;
  const activeTimeElement = document.getElementById('active-time');

  // Function to start tracking
  function startTracking() {
    var cookieString = document.cookie;

    // Split the cookie string into individual cookies
    var cookies = cookieString.split('; ');

    // Initialize a variable to store the currentTime value
    var currentTimeValue = null;

    // Iterate through the cookies to find the "currentTime" cookie
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var parts = cookie.split('=');

      // Check if this cookie has the "currentTime" key
      if (parts[0] === "currentTime") {
        currentTimeValue = parseInt(parts[1]);
        break; // Stop searching once we find the "currentTime" cookie
      }
    }

    // Check if we found the "currentTime" value
    if (!isNaN(currentTimeValue)) {
      startTime = currentTimeValue * 1000;
    } else {
      console.log("currentTime cookie not found or invalid.");
    }
  }

  // Function to stop tracking
  function stopTracking() {
    if (startTime) {
      activeTime += Date.now() - new Date(startTime).getTime();
      startTime = null;
    }
  }

  // Add event listeners for focus and blur events
  window.addEventListener('focus', startTracking);
  window.addEventListener('blur', stopTracking);

  // Function to update the active time every second (you can adjust the interval)
  function updateActiveTime() {
    if (startTime) {
      activeTime += Date.now() - new Date(startTime).getTime();
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