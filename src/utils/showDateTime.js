export function showDateTime() {
    // Get current date and time
    const currentDate = new Date();
  
    // Define arrays for days and months
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    // Get day, month, date, and year
    const day = daysOfWeek[currentDate.getDay()];
    const month = months[currentDate.getMonth()];
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();
  
    // Display the result in one line
    return `${day}, ${month} ${date}, ${year}`;
  }
  
  // Call the function to display the date and time in one line
//   showDateTime();
  