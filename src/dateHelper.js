// Date for website
// This uses Date() in js to display the date, time and other info
// Formatting is changed to my liking

// Grabs date element in html
const dateElement = document.getElementById("date");

// Defines funtion to format the time correctly
function showTime() {
	// Uses Date to retrieve information
	const date = new Date();

	// Formats the date in ISO
	const formattedDate = date.toISOString();

	// Format so it shows Day, HH:MM:SS | DD/MM/YY
	dateElement.innerHTML = formattedDate;
}

// Sets the function to repeat every 1000ms (1s)
setInterval(showTime, 1000);

// Calls the function
showTime();
