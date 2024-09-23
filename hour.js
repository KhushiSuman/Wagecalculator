document.getElementById('wageForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const wage = parseFloat(document.getElementById('wage').value);
    let totalHours = 0;
  
    // Array of day entries (all 9 days)
    const days = [
      { start: 'timeStart1', end: 'timeEnd1' },
      { start: 'timeStart2', end: 'timeEnd2' },
      { start: 'timeStart3', end: 'timeEnd3' },
      { start: 'timeStart4', end: 'timeEnd4' },
      { start: 'timeStart5', end: 'timeEnd5' },
      { start: 'timeStart6', end: 'timeEnd6' },
      { start: 'timeStart7', end: 'timeEnd7' },
      { start: 'timeStart8', end: 'timeEnd8' },
      { start: 'timeStart9', end: 'timeEnd9' }
    ];
  
    // Loop through each day's input to calculate total hours
    days.forEach(day => {
      const startTime = document.getElementById(day.start).value;
      const endTime = document.getElementById(day.end).value;
  
      if (startTime && endTime) {
        const start = new Date(`1970-01-01T${startTime}:00`);
        const end = new Date(`1970-01-01T${endTime}:00`);
        const diffInMilliseconds = end - start;
        const diffInHours = diffInMilliseconds / (1000 * 60 * 60);
        totalHours += diffInHours;
      }
    });
  
    // Calculate total salary
    const totalSalary = (totalHours * wage).toFixed(2);
  
    // Display the result
    document.getElementById('totalSalary').textContent = totalSalary;
  });
  