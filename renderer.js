window.addEventListener('DOMContentLoaded', () => {
    const entryTimeInput = document.getElementById('entryTime');
    const remainingTimeLabel = document.getElementById('remainingTime');
    const exitTimeLabel = document.getElementById('exitTime');
  
    entryTimeInput.addEventListener('change', (event) => {
      const entryTime = event.target.value;
      if (entryTime) {
        const [entryHours, entryMinutes] = entryTime.split(':').map(Number);
        
        // Calculate exit time
        let exitHours = entryHours + 9;
        let exitMinutes = entryMinutes + 45;
  
        // Check if minutes exceed 60
        if (exitMinutes >= 60) {
          exitHours += 1;
          exitMinutes -= 60;
        }
  
        // Check if hours exceed 24
        if (exitHours >= 24) {
          exitHours -= 24;
        }
  
        // Display the results
        const currentTime = new Date();
        const currentHours = currentTime.getHours();
        const currentMinutes = currentTime.getMinutes();
        const remainingHours = exitHours - currentHours;
        const remainingMinutes = exitMinutes - currentMinutes;
        
        remainingTimeLabel.textContent = `Remaining time: ${remainingHours}:${remainingMinutes < 10 ? '0' : ''}${remainingMinutes}`;
        exitTimeLabel.textContent = `Exit time: ${exitHours}:${exitMinutes < 10 ? '0' : ''}${exitMinutes}`;
      }
    });
  });
  